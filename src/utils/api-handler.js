import { version } from "../../package.json";

export const handleError = (err, req, res, next) => {
  if (err) {
    const { status = 500, message, stack, errors } = err;
    if (stack || errors) console.error(stack || errors);
    res.status(status).send({ message, errors, version });
  } else next();
};

export const handle = (controller) => async (req, res, next) => {
  try {
    const { status, data } = await controller(req, res, next);
    res.status(status).send({ data, version });
  } catch (error) {
    next(error);
  }
};
