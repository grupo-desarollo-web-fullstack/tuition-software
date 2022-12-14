import Joi from "joi"

const schemaMatricula = Joi.object({    
    estudiante_id:Joi.number().integer().positive().min(1).required(),
    curso_id:Joi.number().integer().positive().min(1).required(),
    clase_id:Joi.number().integer().positive().min(1).required()
})

export default schemaMatricula;