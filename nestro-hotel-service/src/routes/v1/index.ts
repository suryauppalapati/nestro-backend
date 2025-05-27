import express from "express";
import userRouter from "./user.route";
import authRouter from "./auth.route";
import hotelRouter from "./hotel.route";
import { checkHealth } from "@/controllers/v1";

const v1Router = express.Router();

v1Router.get("/health", checkHealth);
v1Router.use("/user", userRouter);
v1Router.use("/auth", authRouter);
v1Router.use("/hotels", hotelRouter);

export default v1Router;
