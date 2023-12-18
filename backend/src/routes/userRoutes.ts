import express from "express";
import { getUserByEmail } from "../controllers/userControllers";

const router = express.Router();

router.route("/:email").get(getUserByEmail);

export default router;
