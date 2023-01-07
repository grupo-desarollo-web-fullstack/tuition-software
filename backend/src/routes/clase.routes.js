import express from "express";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaClase from "../schemas/clase.schema.js";
import claseServices from "../services/clase.services.js";

const clase = express.Router();

//Obtiene datos
clase.get("/", async function (req, res) {
  const { cursoId, orderBy, orderByRelation } = req.query;
  const fields = Array.isArray(orderBy) ? orderBy : orderBy && [orderBy];
  const [relation, field] = orderByRelation;
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
});

//Obtiene datos por ID
clase.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await claseServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID
clase.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { nsalon, horario_id, curso_id, aforo, disponibilidad } = req.body;
  const data = await claseServices.updateUnique(
    id,
    nsalon,
    horario_id,
    curso_id,
    aforo,
    disponibilidad
  );
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
clase.post("/", validatorHandler(schemaClase), async function (req, res) {
  const { nsalon, horario_id, curso_id, aforo } = req.body;
  const data = await claseServices.create(nsalon, horario_id, curso_id, aforo);
  res.status(201).json({
    data,
    status: 201,
  });
});
export default clase;
