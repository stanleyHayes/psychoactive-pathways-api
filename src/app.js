import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";

import userV1StoryRoutes from "./routes/v1/users/story.routes.js";
import {MONGODB_URI} from "./config/config.js";

dotenv.config();

mongoose.connect(MONGODB_URI).then(mongoose => {
    console.log(`Connected to MongoDB on host ${mongoose.connection.host} and database ${mongoose.connection.db.databaseName}`);
}).catch(error => {
    console.log(`Error connecting to MongoDB: ${error}`);
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/v1/user/stories", userV1StoryRoutes);

export default app;