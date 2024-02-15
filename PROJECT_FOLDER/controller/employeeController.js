import { Op } from "sequelize";
import Employee from "../models/employeeModel.js";
import EmployeeProfile from "../models/employeeProfileModel.js";
import EmployeeFamily from "../models/employeeFamilyModel.js";
import Education from "../models/educationModel.js";

export const getEmployees = async (_, res) => {
  try {
    const data = await Employee.findAll({
      attributes: [
        "id",
        "nik",
        "name",
        "is_active",
        "start_date",
        "end_date",
        "created_by",
        "updated_by",
      ],
      include: [
        {
          model: EmployeeProfile,
          attributes: [
            "place_of_birth",
            "date_of_birth",
            "gender",
            "is_married",
            "prof_pict",
          ],
          as: "profile",
        },
        {
          model: EmployeeFamily,
          attributes: [
            "name",
            "identifier",
            "job",
            "place_of_birth",
            "date_of_birth",
            "religion",
            "is_life",
            "is_divorced",
            "relation_status",
          ],
          as: "family",
        },
        {
          model: Education,
          attributes: ["name", "level", "description"],
          as: "education",
        },
      ],
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export const getEmployee = async (req, res) => {
  try {
    const data = await Employee.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "nik",
        "name",
        "is_active",
        "start_date",
        "end_date",
        "created_by",
        "updated_by",
      ],
      include: [
        {
          model: EmployeeProfile,
          attributes: [
            "place_of_birth",
            "date_of_birth",
            "gender",
            "is_married",
            "prof_pict",
          ],
          as: "profile",
        },
        {
          model: EmployeeFamily,
          attributes: [
            "name",
            "identifier",
            "job",
            "place_of_birth",
            "date_of_birth",
            "religion",
            "is_life",
            "is_divorced",
            "relation_status",
          ],
          as: "family",
        },
        {
          model: Education,
          attributes: ["name", "level", "description"],
          as: "education",
        },
      ],
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export const postEmployee = async (req, res) => {
  try {
    const { nik, name, start_date, end_date, created_by, updated_by } =
      req.body;
    const is_active = 1;
    const data = await Employee.create({
      nik,
      name,
      is_active,
      start_date,
      end_date,
      created_by,
      updated_by,
    });
    await EmployeeProfile.create({
      employee_id: data.id,
      place_of_birth: req.body.profile.place_of_birth,
      date_of_birth: req.body.profile.date_of_birth,
      gender: req.body.profile.gender,
      is_married: req.body.profile.is_married,
      prof_pict: req.body.profile.prof_pict,
      created_by,
      updated_by,
    });
    req?.body?.family_data.forEach(async (item) => {
      await EmployeeFamily.create({
        employee_id: data.id,
        name: item.name,
        identifier: item.identifier,
        job: item.job,
        place_of_birth: item.place_of_birth,
        date_of_birth: item.date_of_birth,
        religion: item.religion,
        is_life: item.is_life,
        is_divorced: item.is_divorced,
        relation_status: item.relation_status,
        created_by,
        updated_by,
      });
    });
    req?.body?.education.forEach(async (item) => {
      await Education.create({
        employee_id: data.id,
        name: item.name || "",
        level: item.level || "",
        description: item.description || "",
        created_by,
        updated_by,
      });
    });

    res.status(201).json({
      msg: "success",
      data,
    });
  } catch (error) {
    res.json(error);
  }
};

export const putEmployee = async (req, res) => {
  try {
    const { name, start_date, end_date, created_by, updated_by } = req.body;
    const is_active = 1;
    await Employee.update(
      {
        name,
        is_active,
        start_date,
        end_date,
        created_by,
        updated_by,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    await EmployeeProfile.update(
      {
        place_of_birth: req.body.profile.place_of_birth,
        date_of_birth: req.body.profile.date_of_birth,
        gender: req.body.profile.gender,
        is_married: req.body.profile.is_married,
        prof_pict: req.body.profile.prof_pict,
      },
      {
        where: {
          employee_id: req.params.id,
        },
      }
    );

    req?.body?.family_data.forEach(async (item) => {
      await EmployeeFamily.update(
        {
          name: item.name,
          identifier: item.identifier,
          job: item.job,
          place_of_birth: item.place_of_birth,
          date_of_birth: item.date_of_birth,
          religion: item.religion,
          is_life: item.is_life,
          is_divorced: item.is_divorced,
          relation_status: item.relation_status,
        },
        {
          where: {
            id: item.id,
          },
        }
      );
    });

    req?.body?.education.forEach(async (item) => {
      await Education.update(
        {
          name: item.name,
          level: item.level,
          description: item.description,
        },
        {
          where: {
            id: item.id,
          },
        }
      );
    });

    res.status(200).json({
      msg: "success",
      data: [],
    });
  } catch (error) {
    res.json(error);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const cek = await Employee.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (cek.length > 0) {
      const del = await Employee.destroy({
        where: {
          id: req.params.id,
        },
      });
      await EmployeeProfile.destroy({
        where: {
          employee_id: req.params.id,
        },
      });
      await EmployeeFamily.destroy({
        where: {
          employee_id: req.params.id,
        },
      });
      await Education.destroy({
        where: {
          employee_id: req.params.id,
        },
      });
      res.json({
        msg: "success",
        data: del,
      });
    } else {
      res.json({
        msg: "data not found",
        data: [],
      });
    }
  } catch (error) {
    res.json(error);
  }
};
