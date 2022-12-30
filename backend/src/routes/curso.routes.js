import express from "express";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaCurso from "../schemas/curso.schema.js";
import cursoServices from "../services/curso.services.js";
import passport from "passport";

const curso = express.Router();

//Obtiene datos
curso.get("/", async function (req, res) {
  const data = await cursoServices.getAll();
  res.json({
    data,
    status: 200,
  });
});

//Obtiene datos por ID

curso.get("/:id",async function (req, res) {
    const { id } = req.params;
    const data = await cursoServices.getUnique(id);
    res.json({
      data,
      status: 200,
    });
  }
);

//Actualiza datos por ID
curso.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { nombre, creditos, tipo, ciclo } = req.body;
  const data = await cursoServices.updateUnique(id, nombre, creditos, tipo, ciclo);
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
curso.post("/", validatorHandler(schemaCurso), async function (req, res) {
  const { nombre, creditos, tipo, ciclo } = req.body;
  const data = await cursoServices.create(nombre, creditos, tipo, ciclo);
  res.status(201).json({
    data,
    status: 201,
  });
});

export default curso;
