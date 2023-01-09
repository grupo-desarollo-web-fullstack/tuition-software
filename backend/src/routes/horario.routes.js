import express from "express";
import {
  deleteHorarioID,
  getHorarios,
  getHorariosId,
  postHorarios,
  putHorarios,
} from "../controllers/horario.controller.js";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaHorario from "../schemas/horario.schema.js";

const horario = express.Router();

horario
  .get("/", getHorarios)
  .get("/:id", getHorariosId)
  .put("/:id", putHorarios)
  .post("/", validatorHandler(schemaHorario), postHorarios)
  .delete("/:id", deleteHorarioID);
export default horario;
