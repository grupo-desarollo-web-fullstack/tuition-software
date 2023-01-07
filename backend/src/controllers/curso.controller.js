import cursoServices from "../services/curso.services.js";

export const getCourses = async function (req, res) {
  const { userId, action } = req.query;
  const data = await cursoServices.getAll({
    where: userId &&
      action && {
        Matricula: {
          [action]: {
            tbl_estudiante_estudiante_id: +userId,
          },
        },
      },
  });
  res.json({
    data,
    status: 200,
  });
};

export const getCoursesID = async function (req, res) {
  const { id } = req.params;
  const data = await cursoServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
};

export const putCourses = async function (req, res) {
  const { id } = req.params;
  const { nombre, creditos, tipo, ciclo, id_clase } = req.body;
  const data = await cursoServices.updateUnique(
    id,
    nombre,
    creditos,
    tipo,
    ciclo,
    id_clase
  );
  res.status(201).json({
    data,
    status: 201,
  });
};

export const postCourses = async function (req, res) {
  const { nombre, creditos, tipo, ciclo, id_clase } = req.body;
  const data = await cursoServices.create(
    nombre,
    creditos,
    tipo,
    ciclo,
    id_clase
  );
  res.status(201).json({
    data,
    status: 201,
  });
};
