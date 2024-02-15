import EmployeeProfile from "../models/employeeProfileModel.js";

export const getEmployeeProfiles = async (req, res) => {
  try {
    const data = await EmployeeProfile.findAll();
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.json(error);
  }
};

export const getEmployeeProfile = async (req, res) => {
  try {
    const data = await EmployeeProfile.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export const postEmployeeProfile = async (req, res) => {
  try {
    const {
      employee_id,
      place_of_birth,
      date_of_birth,
      gender,
      is_married,
      prof_pict,
      created_by,
      updated_by,
    } = req.body;

    const data = await EmployeeProfile.create({
      employee_id,
      place_of_birth,
      date_of_birth,
      gender,
      is_married,
      prof_pict,
      created_by,
      updated_by,
    });
    res.status(201).json(data);
  } catch (error) {
    res.json(error);
  }
};

export const putEmployeeProfile = async (req, res) => {
  try {
    const {
      employee_id,
      place_of_birth,
      date_of_birth,
      gender,
      is_married,
      prof_pict,
      created_by,
      updated_by,
    } = req.body;

    const data = await EmployeeProfile.update(
      {
        employee_id,
        place_of_birth,
        date_of_birth,
        gender,
        is_married,
        prof_pict,
        created_by,
        updated_by,
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

export const deleteEmployeeProfile = async (req, res) => {
  try {
    const data = await EmployeeProfile.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
};
