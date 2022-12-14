import express from "express";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaClase from "../schemas/clase.schema.js";
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
  const { id } = req.params;
  const data = await getDataUniqueFromModel("clase", {
    where: {
      clase_id: +id,
    },
  });
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID
clase.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { nsalon, horario_id } = req.body;
  const data = await updateDataUniqueFromModel("clase", {
    where: {
      clase_id: +id,
    },
    data: {
      clase_nsalon: nsalon,
      tbl_horario_horario_id: +horario_id,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
clase.post("/",validatorHandler(schemaClase),async function (req, res) {
  const { nsalon, horario_id } = req.body;
  const data = await postDataListFromModel("clase", {
    data: {
      clase_nsalon: nsalon,
      tbl_horario_horario_id: +horario_id,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});
export default clase;
