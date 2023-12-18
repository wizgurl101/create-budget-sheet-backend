import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/budgetapp/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  return console.log(`Budget App is listening at http://localhost:${PORT}`);
});
