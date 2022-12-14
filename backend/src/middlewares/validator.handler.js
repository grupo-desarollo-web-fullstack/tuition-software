import Boom from "@hapi/boom"
/**
 * 
 * @param {import("joi").Schema} es esto es un schema 
 * @returns {import("express").RequestHandler}
 */
export default function validatorHandler(es){
    return async(req,res,next) => {
      const {body} = req;
      try {
        await es.validateAsync(body) 
        next()
      } catch (error) {
        const dataError = error.details.map(function (detail) {
          return detail.message ;
        })
        const boomError = Boom.badData(dataError.join(' '))
        next(boomError)
      }
      
    }
}



