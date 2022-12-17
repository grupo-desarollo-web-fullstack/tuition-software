import { badImplementation } from "@hapi/boom";

function handlerError(err, req, res, next) {
  let error = err;

  if (!error.isBoom) {
    error = badImplementation(error.message);
  }
  const { output } = error;
  res.status(output.statusCode).json({ ...output.payload });
}

export default handlerError;
