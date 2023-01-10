import Boom from "@hapi/boom";


//Validador de esquemas
/**
 *
 * @param {import("joi").Schema} es esto es un schema
 * @returns {import("express").RequestHandler}
 */
export default function validatorHandler(es) {
  return async (req, res, next) => {
    const { body } = req;
    try {
      await es.validateAsync(body);
      next();
    } catch (error) {
      const dataError = error.details.map(function (detail) {
        const message = req.__(
          { phrase: detail.type, locale: "es" },
          detail.context
        );
        return message;
      });
      const boomError = Boom.badData(dataError.join(" "));
      next(boomError);
    }
  };
}
