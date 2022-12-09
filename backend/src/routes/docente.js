import express from "express";
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
  const data = await getDataUniqueFromModel("docente", {
    where: {
      docente_id: +req.params.id,
    },
  });
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID
docente.put("/:id", async function (req, res) {
  const data = await updateDataUniqueFromModel("docente", {
    where: {
      docente_id: +req.params.id,
    },
    data: {
      docente_nombre: req.body.nombre,
      docente_edad: +req.body.edad,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
docente.post("/", async function (req, res) {
  const data = await postDataListFromModel("docente", {
    data: {
      docente_nombre: req.body.nombre,
      docente_edad: +req.body.edad,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

export default docente;
