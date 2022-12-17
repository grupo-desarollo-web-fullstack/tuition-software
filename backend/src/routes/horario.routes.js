import express from "express";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaHorario from "../schemas/horario.schema.js";
import horarioServices from "../services/horario.services.js";

const horario = express.Router();

//Obtiene datos
horario.get("/", async function (req, res) {
  const data = await horarioServices.getAll();
  res.json({
    data,
    status: 200,
  });
});

//Obtiene datos por ID
horario.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await horarioServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID -----------
horario.put("/:id", async function (req, res) {
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
});

//Envia nuevos datos
horario.post("/", validatorHandler(schemaHorario), async function (req, res) {
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
});

export default horario;
