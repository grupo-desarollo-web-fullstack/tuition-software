import express from "express";
import passport from "passport";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaCurso from "../schemas/curso.schema.js";
import cursoServices from "../services/curso.services.js";

const curso = express.Router();

//Obtiene datos
curso.get(
  "/",
  function (req, res, next) {
    const { userId } = req.query;
    if (userId)
      return passport.authorize("jwt", { session: false })(req, res, next);
    next();
  },
  async function (req, res) {
    const { userId, action } = req.query;
    const data = await cursoServices.getAll({
      where: userId &&
        action && {
          Clase: {
            [action]: {
              Matricula: {
                some: {
                  tbl_estudiante_estudiante_id: +userId,
                },
              },
            },
          },
        },
    });
    res.json({
      data,
      status: 200,
    });
  }
);

//Obtiene datos por ID
curso.get(
  "/:id",
  function (req, res, next) {
    const { userId } = req.query;
    if (userId)
      return passport.authorize("jwt", { session: false })(req, res, next);
    next();
  },
  async function (req, res) {
    const { id } = req.params;
    const data = await cursoServices.getUnique(id, req.query);
    res.json({
      data,
      status: 200,
    });
  }
);

//Actualiza datos por ID
curso.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { nombre, creditos, tipo, ciclo, id_clase } = req.body;
  const data = await cursoServices.updateUnique(
    id,
    nombre,
    creditos,
    tipo,
    ciclo,
    id_clase
  );
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
curso.post("/", validatorHandler(schemaCurso), async function (req, res) {
  const { nombre, creditos, tipo, ciclo, id_clase } = req.body;
  const data = await cursoServices.create(
    nombre,
    creditos,
    tipo,
    ciclo,
    id_clase
  );
  res.status(201).json({
    data,
    status: 201,
  });
});

export default curso;
