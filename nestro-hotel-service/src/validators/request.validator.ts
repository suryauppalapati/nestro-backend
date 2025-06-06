import { AnyZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import getErrorDetails from "@/utils/validation.util";
import logger from "@/config/logger";

export const requestBodyValidator = (schema: AnyZodObject) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      logger.info(`${request.method}: ${request.baseUrl}`, "schema is valid");
      await schema.parseAsync(request.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        response.status(StatusCodes.BAD_REQUEST).json({
          message: "Invalid request body",
          success: false,
          errors: getErrorDetails(error),
        });
      }
    }
  };
};

export const pathParamValidator = (schema: AnyZodObject) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      logger.info(`${request.method}: ${request.baseUrl}`, "path params are valid");
      await schema.parseAsync(request.params);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        response.status(StatusCodes.BAD_REQUEST).json({
          message: "Invalid path parameters",
          success: false,
          errors: getErrorDetails(error),
        });
      }
    }
  };
};
