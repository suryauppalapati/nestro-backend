import { StatusCodes } from "http-status-codes";

interface AppError extends Error {
  statusCode: number;
}

/**
 * Represents the base application error that extends the built-in Error class and implements the AppError interface.
 * Provides a standard structure for custom application errors with a name, status code, and message.
 *
 * @implements {AppError}
 */
class BaseAppError extends Error implements AppError {
  statusCode: number;
  constructor(name: string, statusCode: number, message: string) {
    super(message);
    (this.name = name), (this.statusCode = statusCode);
  }
}

// Represents a 500 Internal Server Error
class InternalServerError extends BaseAppError {
  constructor(message: string) {
    super("InternalServerError", StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}

// Represents a 401 Authentication Error
class AuthenticationError extends BaseAppError {
  constructor(message: string) {
    super("AuthenticationError", StatusCodes.UNAUTHORIZED, message);
  }
}

// Represents a 403 Authorization Error
class AuthorizationError extends BaseAppError {
  constructor(message: string) {
    super("AuthorizationError", StatusCodes.FORBIDDEN, message);
  }
}

// Represents a 400 Bad Request Error
class BadRequestError extends BaseAppError {
  constructor(message: string) {
    super("BadRequestError", StatusCodes.BAD_REQUEST, message);
  }
}

export { InternalServerError, AuthenticationError, AuthorizationError, BadRequestError };
