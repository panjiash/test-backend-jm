import EmployeeFamily from "../models/employeeFamilyModel.js";

export const getEmployeeFamilys = async (req, res) => {
  try {
    const data = await EmployeeFamily.findAll({
      attributes: [
        "id",
        "employee_id",
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
    });
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
};

export const getEmployeeFamily = async (req, res) => {
  try {
    const data = await EmployeeFamily.findOne(
      {
        attributes: [
          "id",
          "employee_id",
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
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
};

export const postEmployeeFamily = async (req, res) => {
  try {
    const {
      employee_id,
      name,
      identifier,
      job,
      place_of_birth,
      date_of_birth,
      religion,
      is_life,
      is_divorced,
      relation_status,
      created_by,
      updated_by,
    } = req.body;
    const data = await EmployeeFamily.create({
      employee_id,
      name,
      identifier,
      job,
      place_of_birth,
      date_of_birth,
      religion,
      is_life,
      is_divorced,
      relation_status,
      created_by,
      updated_by,
    });
    res.status(201).json(data);
  } catch (error) {
    res.json(error);
  }
};

export const putEmployeeFamily = async (req, res) => {
  try {
    const {
      employee_id,
      name,
      identifier,
      job,
      place_of_birth,
      date_of_birth,
      religion,
      is_life,
      is_divorced,
      relation_status,
      created_by,
      updated_by,
    } = req.body;
    const data = await EmployeeFamily.update(
      {
        employee_id,
        name,
        identifier,
        job,
        place_of_birth,
        date_of_birth,
        religion,
        is_life,
        is_divorced,
        relation_status,
        created_by,
        updated_by,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export const deleteEmployeeFamily = async (req, res) => {
  try {
    const data = await EmployeeFamily.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};
