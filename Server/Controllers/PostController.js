import PostModel from "../Models/PostModel";
import mongoose from "mongoose";
import UserModel from "../Models/UserModel";
//Create new Post
export const createPost = async(req,res)=>{
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).json("Posted")
    } catch (error) {
        res.status(500).json(error);
    }
}

// Get a Post
export const getPost = async(req,res)=>{
    const id = req.params.id;
    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatePost = async(req,res) =>{

    const postId = req.params.id;
    const {userId} = req.body;
    try {
      const post = await PostModel.findById(postId)

      if(post.userId == userId)
      {
        await post.updateOne( {$set : req.body})
        res.status(200).json("post Updated")
      }
      else
      {
        res.status(403).json("Action forebiddin")
      }

    } catch (error) {
        
    }
}

// Delete a post 
export const deletePost =async (req,res) =>{
    const postid = req.params.id;
    const {userId} = req.body;
    try {
        const post = await PostModel.findById(postid)
        if(post.userId == userId)
        {
            await post.deleteOne()
            res.status(200).json("post deleted")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Like and dislike a post
export const likepost = async (req,res)=>{
    const id =req.params.id;
    const {userId} = req.body;

    try {
        const post =await PostModel.findById(id);
        if(!post.likes.includes(userId))
        {
            await post.updateOne({$push : {likes : userId}})
            res.status(200).json("post Liked")
        }
        else
        {
            await post.updateOne({$pull : {likes : userId}})
            res.status(200).json("post Unliked")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get time line

export const getTimeline = async (req,res)=>{
    const userId =req.params.id;

    try {
        const currentuserPosts = await PostModel.find({userId :userId})
        const followingPosts =await UserModel.aggregate([
            {
                $match: {
                    _id : new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup : {
                    from : "posts",
                    localField : "following",
                    foreignField: "userId",
                    as : "followingPosts"
                }
            },
            {
                $project : {
                    followingPosts :1,
                    _id :0
                }
            }
        ])
        res.status(200).json(currentuserPosts.concat(followingPosts[0].followingPosts)
        .sort((a,b) =>{
            return b.createdAt - a.createdAt
        })
        );
    } catch (error) {
        res.status(500).json(error)
    }
}