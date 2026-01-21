import express from "express";
import userAuth from "../Middleware/userAuth.js";
import { getUserData } from "../Controllers/userController.js";

const userRouter = express.Router();

// GET request, userId comes from auth middleware
userRouter.get("/data", userAuth, getUserData);

export default userRouter;
