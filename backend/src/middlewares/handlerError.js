function handlerError(err, req, res, next) {
  res.json(err);
}

export default handlerError;
