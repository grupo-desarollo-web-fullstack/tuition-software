import Joi from "joi"

const schemaMatricula = Joi.object({    
    estudiante_id:Joi.number().integer().positive().required(),
    curso_id:Joi.number().integer().positive().required(),
})

export default schemaMatricula;