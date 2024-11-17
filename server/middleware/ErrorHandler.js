export const handleNotFound = (req, res, next) => {
  const error = new Error(`path not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const globalErrorHandler = (err, req, res, next) => {
  const resStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "ValidationError") {
    const formattedErrors = Object.keys(err.errors).reduce((acc, key) => {
      acc[key] = [err.errors[key].message];
      return acc;
    }, {});

    return res.status(400).json({
      code: "400",
      status: "error",
      message: "Validation error",
      errors: formattedErrors,
    });
  }

  // Duplicate data error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];

    return res.status(400).json({
      code: "400",
      status: "error",
      message: `The ${field} already exists`,
    });
  }

  // default error response
  res.status(resStatusCode).json({
    code: resStatusCode.toString(),
    status: "error",
    message: message,
    stack: err.stack,
  });
};
