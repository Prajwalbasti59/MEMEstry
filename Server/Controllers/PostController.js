import PostModel from "../Models/UserModel";
import mongoose from "mongoose";


export const createPost = async(req,res)=>{
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).json("Posted")
    } catch (error) {
        res.status(500).json(error);
    }
}