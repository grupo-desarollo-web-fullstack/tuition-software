import Joi from "joi"

const schemaEstudiante = Joi.object({    
    nombre:Joi.string().max(200).required(),
    carrera:Joi.string().max(200).required(),
    ciclo:Joi.number().positive().min(1).max(10).required(),
    password:Joi.string().max(200).required(),
    email:Joi.string().email().required()
})

export default schemaEstudiante;