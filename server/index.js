import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";

dotenv.config();
const app = express();

import {
  globalErrorHandler,
  handleNotFound,
} from "./middleware/ErrorHandler.js";
import authRoute from "./routes/auth.js";

// Middleware
app.use(
  cors({
    origin: "*",
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(helmet());
app.use(ExpressMongoSanitize());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route;
app.use("/api/v1/auth", authRoute);

// Error handling
app.use(handleNotFound);
app.use(globalErrorHandler);

// Connect DB
connectDB();

// Port
const PORT = process.env.PORT || 3010;

// Server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
