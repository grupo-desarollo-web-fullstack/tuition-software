import Joi from "joi"

const schemaCurso = Joi.object({
    nombre:Joi.string().max(100).required(),
    creditos:Joi.number().integer().positive().required(),
    tipo:Joi.string().max(45)
})

export default schemaCurso;