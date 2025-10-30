// req.body - req.params - req.query
// middleware => function that takes 3 positional arguments (req, res, next)
// schema

export const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(
      { ...req.body, ...req.params, ...req.query },
      { abortEarly: false }
    );

    if (result.error) {
      const errorMessages = result.error.details.map((error) => error.message);
      return next(new Error(errorMessages.join(", "), { cause: 400 }));
    }

    return next();
  };
};
