import estudianteServices from "../services/estudiante.services.js";

import config from "../config/index.js";
const options = {
    secretOrKey: config.secretOrKey,
  };

export const loginEstudiante = function (req, res, next) {
  try {
    const { user } = req;
    const data = estudianteServices.login(user, options);
    res.status(201).json({
      data,
      status: 201,
    });
  } catch (error) {
    next(error);
  }
};

export const getEstudiantes = async function (req, res) {
  const data = await estudianteServices.getAll();
  res.json({
    data,
    status: 200,
  });
};

export const getEstudiantesId = async function (req, res) {
  const { id } = req.params;
  const data = await estudianteServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
};

export const putEstudiante = async function (req, res) {
  const { id } = req.params;
  const { nombre, carrera, ciclo } = req.body;
  const data = await estudianteServices.updateUnique(
    id,
    nombre,
    carrera,
    ciclo
  );
  res.status(201).json({
    data,
    status: 201,
  });
};

export const postEstudiante = async function (req, res, next) {
  try {
    const data = await estudianteServices.create(req.body, options);
    res.status(201).json({
      data,
      status: 201,
    });
  } catch (err) {
    res.locals.fieldError = "email";
    next(err);
  }
};
