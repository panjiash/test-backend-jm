import Education from "../models/educationModel.js";

export const getEducations = async (req, res) => {
  try {
    const data = await Education.findAll({
      attributes: [
        "id",
        "employee_id",
        "name",
        "level",
        "description",
        "created_by",
        "updated_by",
      ],
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export const getEducation = async (req, res) => {
  try {
    const data = await Education.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
};

export const postEducation = async (req, res) => {
  try {
    const { employee_id, name, level, description, created_by, updated_by } =
      req.body;
    const data = await Education.create({
      employee_id,
      name,
      level,
      description,
      created_by,
      updated_by,
    });
    res.status(201).json(data);
  } catch (error) {
    res.json(error);
  }
};

export const putEducation = async (req, res) => {
  try {
    const { employee_id, name, level, description, created_by, updated_by } =
      req.body;
    const data = await Education.update(
      {
        employee_id,
        name,
        level,
        description,
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

export const deleteEducation = async (req, res) => {
  try {
    const data = await Education.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};
