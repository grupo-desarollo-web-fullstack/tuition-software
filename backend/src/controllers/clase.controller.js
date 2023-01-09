import claseServices from "../services/clase.services.js";

export const getClases = async function (req, res) {
  const { cursoId, orderBy, orderByRelation } = req.query;
  const fields = Array.isArray(orderBy) ? orderBy : orderBy && [orderBy];
  const [relation, field] = orderByRelation || [];
  const data = await claseServices.getAll({
    where: cursoId && {
      tbl_curso_curso_id: +cursoId,
    },
    orderBy:
      fields?.map(function (field) {
        return { [field]: "asc" };
      }) ||
      (orderByRelation && {
        [relation]: {
          [field]: "asc",
        },
      }),
  });
  res.json({
    data,
    status: 200,
  });
};

export const getClasesID = async function (req, res) {
  const { id } = req.params;
  const data = await claseServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
};

export const putClasesID = async function (req, res) {
  const { id } = req.params;
  const { nsalon, horario_id, curso_id, aforo } = req.body;
  const data = await claseServices.updateUnique(
    id,
    nsalon,
    horario_id,
    curso_id,
    aforo
  );
  res.status(201).json({
    data,
    status: 201,
  });
};

export const postClase = async function (req, res) {
  const { nsalon, horario_id, curso_id, aforo } = req.body;
  const data = await claseServices.create(nsalon, horario_id, curso_id, aforo);
  res.status(201).json({
    data,
    status: 201,
  });
};

export const deleteClaseID = async function (req, res) {
  const { id } = req.params;
  const data = await docenteServices.delete(id);
  res.status(200).json({
    data,
    status: 201,
  });
};
