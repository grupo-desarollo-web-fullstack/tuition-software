import express from "express";
import {
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../services/db.js";
import passport from "passport";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import localStrategy from "../libs/estrategies/authLocal.js";
import schemaEstudiante from "../schemas/estudiante.schema.js";
import validatorHandler from "../middlewares/validator.handler.js";

const estudiante = express.Router();
const options = {
  secretOrKey: "secret",
};

//Passport Estrategias
passport.use(localStrategy)

estudiante.post(
  "/login",
  passport.authenticate("local"),
  async function (req, res) {
    const { user: data } = req;
    const token = jwt.sign(
      {
        id: data.estudiante_id,
      },
      options.secretOrKey
    );
    data.token = token;
    delete data.estudiante_password;
    res.status(201).json({
      data,
      status: 201,
    });
  }
);

estudiante.get("/", async function (req, res) {
  const data = await getDataListFromModel("estudiante");
  res.json({
    data,
    status: 200,
  });
});

estudiante.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await getDataUniqueFromModel("estudiante", {
    where: {
      estudiante_id: +id,
    },
  });
  res.json({
    data,
    status: 200,
  });
});

estudiante.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { nombre, carrera, ciclo } = req.body;
  const data = await updateDataUniqueFromModel("estudiante", {
    where: {
      estudiante_id: +id,
    },
    data: {
      estudiante_nombre: nombre,
      estudiante_carrera: carrera,
      estudiante_ciclo: +ciclo,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

estudiante.post("/", validatorHandler(schemaEstudiante),async function (req, res) {
  const { nombre, carrera, ciclo, password,email } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const data = await postDataListFromModel("estudiante", {
    data: {
      estudiante_nombre: nombre,
      estudiante_carrera: carrera,
      estudiante_ciclo: +ciclo,
      estudiante_password: passwordHash,
      estudiante_email: email,
    },
  });

  const token = jwt.sign(
    {
      id: data.estudiante_id,
    },
    options.secretOrKey
  );
  data.token = token;
  delete data.estudiante_password;
  res.status(201).json({
    data,
    status: 201,
  });
});

export default estudiante;
