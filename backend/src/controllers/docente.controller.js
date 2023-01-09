import docenteServices from "../services/docente.services.js";

export const getDocentes = async function (req, res) {
  const data = await docenteServices.getAll();
  res.json({
    data,
    status: 200,
  });
};

export const getDocentesId = async function (req, res) {
  const { id } = req.params;
  const data = await docenteServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
};

export const putDocentes = async function (req, res) {
  const { id } = req.params;
  const { nombre, edad } = req.body;
  const data = await docenteServices.updateUnique(id, nombre, edad);
  res.status(201).json({
    data,
    status: 201,
  });
};

export const postDocentes = async function (req, res) {
  const { nombre, edad } = req.body;
  const data = await docenteServices.create(nombre, edad);
  res.status(201).json({
    data,
    status: 201,
  });
};

export const deleteDocenteID = async function (req, res) {
  const { id } = req.params;
  const data = await docenteServices.delete(id);
  res.status(200).json({
    data,
    status: 201,
  });
};
