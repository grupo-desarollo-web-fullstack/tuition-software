import express from "express";
import passport from "passport";
import localStrategy from "../libs/estrategies/authLocal.js";
import schemaEstudiante, {
  schemaLoginEstudiante,
} from "../schemas/estudiante.schema.js";
import validatorHandler from "../middlewares/validator.handler.js";


import {
  getEstudiantes,
  getEstudiantesId,
  loginEstudiante,
  postEstudiante,
  putEstudiante,
} from "../controllers/estudiante.controller.js";

const estudiante = express.Router();


//Passport Estrategias
passport.use(localStrategy);

estudiante
  .post(
    "/login",
    validatorHandler(schemaLoginEstudiante),
    passport.authenticate("local", { session: false, failWithError: true }),
    loginEstudiante
  )
  .get("/", getEstudiantes)
  .get(
    "/info",
    (req, res, next) => {
      const middlewareAuthenticate = passport.authenticate(
        "jwt",
        { session: false },
        (error, user) => {
          if (error) return next(error);
          if (user) return (req.user = user);
          res.json({
            data: null,
            status: 200,
          });
        }
      );
      middlewareAuthenticate(req, res, next);
    },
    async function (req, res) {
      const { user: data } = req;
      delete data.estudiante_password;
      res.json({
        data,
        status: 200,
      });
    }
  )
  .get("/:id", getEstudiantesId)
  .put("/:id", putEstudiante)
  .post("/", validatorHandler(schemaEstudiante), postEstudiante);

export default estudiante;
