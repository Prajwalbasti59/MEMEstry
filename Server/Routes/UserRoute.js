import express from "express";
import { getUser } from "../Controllers/UserController";
const router = express.Router();

router.get('/:id',getUser)

export default router;

