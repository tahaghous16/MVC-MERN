import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/connection.js";
import registerRouter from "./routes/user.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", registerRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

connectDB();
