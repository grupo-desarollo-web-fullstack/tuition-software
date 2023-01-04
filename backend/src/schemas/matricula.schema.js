import Joi from "joi";

const schemaMatricula = Joi.object({
  estudiante_id: Joi.number().integer().positive().required(),
  clase_id: Joi.number().integer().positive().required(),
});
