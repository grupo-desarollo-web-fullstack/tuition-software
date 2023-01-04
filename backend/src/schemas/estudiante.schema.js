import Joi from "joi";

export const schemaLoginEstudiante = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().max(50).required(),
});

const schemaEstudiante = Joi.object({
  nombre: Joi.string().max(200).required(),
  carrera: Joi.string().max(200).required(),
  ciclo: Joi.number().positive().min(1).max(10).required(),
  password: Joi.string().max(50).required(),
  email: Joi.string().email().required(),
});

export default schemaEstudiante;
