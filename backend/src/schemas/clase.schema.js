import Joi from "joi";

const schemaClase = Joi.object({
  nsalon: Joi.string().max(10).alphanum().required(),
  horario_id: Joi.number().integer().positive().required(),
});

export default schemaClase;
