import express from "express";
import {
  getDocentes,
  getDocentesId,
  postDocentes,
  putDocentes,
} from "../controllers/docente.controller.js";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaDocente from "../schemas/docente.schema.js";

const docente = express.Router();

//Obtiene datos
docente
  .get("/", getDocentes)
  .get("/:id", getDocentesId)
  .put("/:id", putDocentes)
  .post("/", validatorHandler(schemaDocente), postDocentes);

export default docente;
