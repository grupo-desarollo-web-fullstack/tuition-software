/**
 * 
 * @param {import("joi").Schema} es esto es un schema 
 * @returns {import("express").RequestHandler}
 */
export default function validate(es){
    return async(req,res,next) => {
      const {body} = req;
      try {
        await es.validateAsync(body) 
        next()
      } catch (error) {
        next(error)
      }
      
    }
}



