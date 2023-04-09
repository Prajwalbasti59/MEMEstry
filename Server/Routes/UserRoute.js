import express from "express";
import { getUser, updateuser,deleteuser, followuser,unfollowuser } from "../Controllers/UserController";
import { deleteModel } from "mongoose";
const router = express.Router();

router.get('/:id',getUser)
router.put('/:id',updateuser)
router.delete('/:id',deleteuser)
router.put('/:id/follow',followuser)
router.put('/:id/unfollow',unfollowuser)
export default router;

