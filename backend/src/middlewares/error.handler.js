function handlerError(err, req, res, next) {
  if (err.isBoom) { 
    const { output } = err
    return res.status(output.statusCode).json({ ...output.payload })
  }
  res.json(err);
}

export default handlerError;
