import express from "express";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaClase from "../schemas/clase.schema.js";
import claseServices from "../services/clase.services.js";
const clase = express.Router();

//Obtiene datos
clase.get("/", async function (req, res) {
  const data = await claseServices.getAll();
  res.json({
    data,
    status: 200,
  });
});

//Obtiene datos por ID
clase.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await claseServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID
clase.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { nsalon, horario_id } = req.body;
  const data = await claseServices.updateUnique(id,nsalon,horario_id);
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
clase.post("/",validatorHandler(schemaClase),async function (req, res) {
  const { nsalon, horario_id } = req.body;
  const data = await claseServices.create(nsalon,horario_id);
  res.status(201).json({
    data,
    status: 201,
  });
});
export default clase;