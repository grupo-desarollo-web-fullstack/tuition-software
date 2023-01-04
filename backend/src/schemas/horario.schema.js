import Joi from "joi";

const schemaHorario = Joi.object({
  horario_fecha: Joi.date().required(),
  disponibilidad: Joi.boolean().required(),
  aforo: Joi.number().integer().positive().max(40).required(),
  docente_id: Joi.number().integer().positive().min(1).required(),
});

export default schemaHorario;
