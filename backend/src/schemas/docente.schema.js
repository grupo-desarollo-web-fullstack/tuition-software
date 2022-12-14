import Joi from "joi"

const schemaDocente = Joi.object({    
    nombre:Joi.string().max(200).required(),
    edad:Joi.number().integer().positive().required()
})

export default schemaDocente;