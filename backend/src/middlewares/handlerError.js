import Joi from "joi";

function handlerError(err, req, res, next) {
  if (err.isJoi) {
    res.json(
      err.details.map(function (detail) {
        return { message: detail.message };
      })
    );
  }
  res.json(err);
}

export default handlerError;
