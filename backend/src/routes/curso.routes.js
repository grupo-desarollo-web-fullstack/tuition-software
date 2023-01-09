import express from "express";
import passport from "passport";
import {
  deleteCursoID,
  getCourses,
  getCoursesID,
  postCourses,
  putCourses,
} from "../controllers/curso.controller.js";
import validatorHandler from "../middlewares/validator.handler.js";
import schemaCurso from "../schemas/curso.schema.js";

const curso = express.Router();

//Obtiene datos
curso
  .get(
    "/",
    function (req, res, next) {
      const { userId } = req.query;
      if (userId)
        return passport.authorize("jwt", { session: false })(req, res, next);
      next();
    },
    getCourses
  )
  .get("/:id", getCoursesID)
  .put("/:id", putCourses)
  .post("/", validatorHandler(schemaCurso), postCourses)
  .delete("/:id", deleteCursoID);

export default curso;
