import express from "express";
import passport from "passport";
import localStrategy from "../libs/estrategies/authLocal.js";
import schemaEstudiante from "../schemas/estudiante.schema.js";
import validatorHandler from "../middlewares/validator.handler.js";
import estudianteServices from "../services/estudiante.services.js";
import config from "../config/index.js";

const estudiante = express.Router();
const options = {
  secretOrKey: config.secretOrKey,
};

//Passport Estrategias
passport.use(localStrategy);

estudiante.post(
  "/login",
  passport.authenticate("local", { session: false, failWithError: true }),
  function (req, res, next) {
    try {
      const { user } = req;
      const data = estudianteServices.login(user, options);
      res.status(201).json({
        data,
        status: 201,
      });
    } catch (error) {
      next(error);
    }
  }
);

//-------hecho
estudiante.get("/", async function (req, res) {
  const data = await estudianteServices.getAll();
  res.json({
    data,
    status: 200,
  });
});

//-------hecho
estudiante.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await estudianteServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
});

//-------hecho
estudiante.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { nombre, carrera, ciclo } = req.body;
  const data = await estudianteServices.updateUnique(
    id,
    nombre,
    carrera,
    ciclo
  );
  res.status(201).json({
    data,
    status: 201,
  });
});

estudiante.post(
  "/",
  validatorHandler(schemaEstudiante),
  async function (req, res) {
    const data = await estudianteServices.create(req.body, options);
    res.status(201).json({
      data,
      status: 201,
    });
  }
);

export default estudiante;
