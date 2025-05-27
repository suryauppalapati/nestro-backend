import express from "express";
import { authController as auth } from "@/controllers/v1";
import { requestBodyValidator } from "@/validators/request.validator";
import { signInSchema, signUpSchema } from "@/schema/auth.schema";

const authRouter = express.Router();

authRouter.post("/signin", requestBodyValidator(signInSchema), auth.signinUser);
authRouter.post("/signup", requestBodyValidator(signUpSchema), auth.signupUser);

export default authRouter;
