import horarioServices from "../services/horario.services.js";

export const getHorarios = async function (req, res) {
  const { cursoId, orderBy } = req.query;
  const fields = Array.isArray(orderBy) ? orderBy : orderBy && [orderBy];
  const data = await horarioServices.getAll({
    where: cursoId && {
      tbl_curso_curso_id: +cursoId,
    },
    orderBy: fields?.map(function (field) {
      return { [field]: "asc" };
    }),
  });
  res.json({
    data,
    status: 200,
  });
};

export const getHorariosId = async function (req, res) {
  const { id } = req.params;
  const data = await horarioServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
};

export const putHorarios = async function (req, res) {
  const { id } = req.params;
  const { horario_fecha, disponibilidad, aforo, docente_id } = req.body;

  const data = await horarioServices.updateUnique(
    id,
    horario_fecha,
    disponibilidad,
    aforo,
    docente_id
  );
  res.status(201).json({
    data,
    status: 201,
  });
};

export const postHorarios = async function (req, res) {
  const { horario_fecha, disponibilidad, aforo, docente_id } = req.body;
  const data = await horarioServices.create(
    horario_fecha,
    disponibilidad,
    aforo,
    docente_id
  );
  res.status(201).json({
    data,
    status: 201,
  });
};
