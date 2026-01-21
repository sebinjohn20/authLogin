import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectToDB from "./Database/db.js";
import router from "./Routes/auth-routes.js";
import userRouter from "./Routes/user-routes.js";

const app = express();
const port = process.env.PORT || 4000;
connectToDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => res.send("API Working"));
app.use("/api/auth", router);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
