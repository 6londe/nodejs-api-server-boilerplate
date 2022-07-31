import httpStatus from "http-status";

class APIError extends Error {
  constructor({
    message,
    errors,
    stack,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
  }) {
    super(message);
    this.message = message.message || message;
    this.errors = errors;
    this.stack = stack;
    this.status = status;
    this.isPublic = isPublic;
  }
}

export default APIError;
