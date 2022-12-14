import express from "express";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaHorario from "../schemas/horario.schema.js";
import {
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../services/db.js";

const horario = express.Router();

//Obtiene datos
horario.get("/", async function (req, res) {
  const data = await getDataListFromModel("horario");
  res.json({
    data,
    status: 200,
  });
});

//Obtiene datos por ID
horario.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await getDataUniqueFromModel("horario", {
    where: {
      horario_id: +id,
    },
  });
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID -----------
horario.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { horario_fecha, disponibilidad, aforo, docente_id } = req.body;

  const data = await updateDataUniqueFromModel("horario", {
    where: {
      horario_id: +id,
    },
    data: {
      horario_fecha: new Date(horario_fecha),
      horario_disponibilidad: !!disponibilidad,
      horario_aforo: +aforo,
      tbl_docente_docente_id: +docente_id,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
horario.post("/",validatorHandler(schemaHorario),async function (req, res) {
  const { horario_fecha, disponibilidad, aforo, docente_id } = req.body;
  const data = await postDataListFromModel("horario", {
    data: {
      horario_fecha: new Date(horario_fecha),
      horario_disponibilidad: !!disponibilidad,
      horario_aforo: +aforo,
      tbl_docente_docente_id: +docente_id,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

export default horario;
