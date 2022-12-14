import express from "express";
import validate from "../middlewares/validate.js";
import schemaDocente from "../schemas/docente.schema.js";
import {
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../services/db.js";

const docente = express.Router();

//Obtiene datos
docente.get("/", async function (req, res) {
  const data = await getDataListFromModel("docente");
  res.json({
    data,
    status: 200,
  });
});

//Obtiene datos por ID
docente.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await getDataUniqueFromModel("docente", {
    where: {
      docente_id: +id,
    },
  });
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID
docente.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { nombre, edad } = req.body;
  const data = await updateDataUniqueFromModel("docente", {
    where: {
      docente_id: +id,
    },
    data: {
      docente_nombre: nombre,
      docente_edad: +edad,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
docente.post("/",validate(schemaDocente), async function (req, res) {
  const { nombre, edad } = req.body;
  const data = await postDataListFromModel("docente", {
    data: {
      docente_nombre: nombre,
      docente_edad: +edad,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

export default docente;
