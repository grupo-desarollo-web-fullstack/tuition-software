import express from "express";
import passport from "passport";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaMatricula from "../schemas/matricula.schema.js";
import matriculaServices from "../services/matricula.services.js";

const matricula = express.Router();

matricula.use(
  passport.authorize("jwt", {
    session: false,
    failWithError: true,
  })
);

//Obtiene datos
matricula.get("/", async function (req, res) {
  const data = await matriculaServices.getAll();
  res.json({
    data,
    status: 200,
  });
});

//Obtiene datos por ID
matricula.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await matriculaServices.getUnique(id);
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID
matricula.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { clase_id, estudiante_id } = req.body;
  const data = await matriculaServices.updateUnique(
    id,
    estudiante_id,
    clase_id
  );
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
matricula.post(
  "/",
  validatorHandler(schemaMatricula),
  async function (req, res) {
    const { clase_id, estudiante_id } = req.body;
    const data = await matriculaServices.create(
      estudiante_id,
      clase_id
    );
    res.status(201).json({
      data,
      status: 201,
    });
  }
);

export default matricula;
