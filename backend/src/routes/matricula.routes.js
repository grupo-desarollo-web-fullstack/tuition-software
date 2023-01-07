import express from "express";
import passport from "passport";
import {
  getMatriculas,
  getMatriculasId,
  postMatriculas,
  putMatriculas,
} from "../controllers/matricula.controller.js";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaMatricula from "../schemas/matricula.schema.js";

const matricula = express.Router();

matricula.use(
  passport.authorize("jwt", {
    session: false,
    failWithError: true,
  })
);

//Obtiene datos
matricula
  .get("/", getMatriculas)
  .get("/:id", getMatriculasId)
  .put("/:id", putMatriculas)
  .post("/", validatorHandler(schemaMatricula), postMatriculas);

export default matricula;
