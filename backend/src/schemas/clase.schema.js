import Joi from "joi";

const schemaClase = Joi.object({
  nsalon: Joi.string().max(10).alphanum().required(),
  horario_id: Joi.number().integer().positive().required(),
  curso_id: Joi.number().integer().positive().required(),
  aforo: Joi.number().integer().positive().max(40).required(),
});

export default schemaClase;
