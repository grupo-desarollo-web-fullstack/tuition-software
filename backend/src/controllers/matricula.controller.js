import matriculaServices from "../services/matricula.services.js";

export const getMatriculas = async function (req, res) {
  const data = await matriculaServices.getAll();
  res.json({
    data,
    status: 200,
  });
};

export const getMatriculasId = async function (req, res) {
  const { id } = req.params;
  const data = await matriculaServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
};

export const putMatriculas = async function (req, res) {
  const { id } = req.params;
  const { clase_id, estudiante_id } = req.body;
  const data = await matriculaServices.updateUnique(
    id,
    estudiante_id,
    clase_id
  );
  res.status(201).json({
    data,
    status: 201,
  });
};

export const postMatriculas = async function (req, res) {
  const { clase_id, estudiante_id } = req.body;
  const data = await matriculaServices.create(estudiante_id, clase_id);
  res.status(201).json({
    data,
    status: 201,
  });
};
