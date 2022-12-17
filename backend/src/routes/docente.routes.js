import express from "express";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaDocente from "../schemas/docente.schema.js";
import docenteServices from "../services/docente.services.js";

const docente = express.Router();

//Obtiene datos
docente.get("/", async function (req, res) {
  const data = await docenteServices.getAll();
  res.json({
    data,
    status: 200,
  });
});

//Obtiene datos por ID
docente.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await docenteServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID
docente.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { nombre, edad } = req.body;
  const data = await docenteServices.updateUnique(id, nombre, edad);
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
docente.post("/", validatorHandler(schemaDocente), async function (req, res) {
  const { nombre, edad } = req.body;
  const data = await docenteServices.create(nombre, edad);
  res.status(201).json({
    data,
    status: 201,
  });
});

export default docente;
