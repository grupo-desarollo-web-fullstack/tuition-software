import { badData, badImplementation, unauthorized } from "@hapi/boom";

function handlerError(err, req, res, next) {
  let error = err;

  if (!error.isBoom) {
    if (error.name === "AuthenticationError") {
      error = unauthorized(error.message);
    } else if (error.code) {
      const message = req.__(
        { phrase: error.code, locale: "es" },
        {
          field: res.locals.fieldError,
        }
      );
      error = badData(message);
    } else {
      error = badImplementation(error.message, {
        stack: error.stack,
      });
    }
  }
  const { output } = error;
  res.status(output.statusCode).json({ ...output.payload });
}

export default handlerError;
