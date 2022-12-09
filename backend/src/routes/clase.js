import express from "express";
import {
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../services/db.js";

const clase = express.Router();

//Obtiene datos
clase.get("/", async function (req, res) {
  const data = await getDataListFromModel("clase");
  res.json({
    data,
    status: 200,
  });
});

//Obtiene datos por ID
clase.get("/:id", async function (req, res) {
  const data = await getDataUniqueFromModel("clase", {
    where: {
      clase_id: +req.params.id,
    },
  });
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID
clase.put("/:id", async function (req, res) {
  const data = await updateDataUniqueFromModel("clase", {
    where: {
      clase_id: +req.params.id,
    },
    data: {
      clase_nsalon: req.body.nsalon,
      tbl_horario_horario_id: +req.body.horario_id,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
clase.post("/", async function (req, res) {
  const data = await postDataListFromModel("clase", {
    data: {
      clase_nsalon: req.body.nsalon,
      tbl_horario_horario_id: +req.body.horario_id,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

export default clase;
