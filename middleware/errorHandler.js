function errorHandler(err, req, res, next) {
  if (err.headerSent) {
    return next();
  }
  res.status(500).send({
    success: false,
    message: err,
    data: {}
  });
}

module.exports = { errorHandler };



