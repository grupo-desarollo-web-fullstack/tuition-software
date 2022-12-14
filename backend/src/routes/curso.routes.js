import express from "express";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaCurso from "../schemas/curso.schema.js";
import {
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../services/db.js";

const curso = express.Router();

//Obtiene datos
curso.get("/", async function (req, res) {
  const data = await getDataListFromModel("curso");
  res.json({
    data,
    status: 200,
  });
});

//Obtiene datos por ID
curso.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await getDataUniqueFromModel("curso", {
    where: {
      curso_id: +id,
    },
  });
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID
curso.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { nombre, creditos, tipo } = req.body;
  const data = await updateDataUniqueFromModel("curso", {
    where: {
      curso_id: +id,
    },
    data: {
      curso_nombre: nombre,
      curso_creditos: creditos,
      curso_tipo: +tipo,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
curso.post("/", validatorHandler(schemaCurso),async function (req, res) {
  const { nombre, creditos, tipo } = req.body;
  const data = await postDataListFromModel("curso", {
    data: {
      curso_nombre: nombre,
      curso_creditos: creditos,
      curso_tipo: tipo,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

export default curso;
