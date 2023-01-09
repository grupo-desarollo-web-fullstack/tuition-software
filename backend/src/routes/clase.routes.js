import express from "express";
import {
  deleteClaseID,
  getClases,
  getClasesID,
  postClase,
  putClasesID,
} from "../controllers/clase.controller.js";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaClase from "../schemas/clase.schema.js";

const clase = express.Router();

//Obtiene datos
clase
  .get("/", getClases)
  .get("/:id", getClasesID)
  .put("/:id", putClasesID)
  .post("/", validatorHandler(schemaClase), postClase)
  .delete("/:id", deleteClaseID);

export default clase;
