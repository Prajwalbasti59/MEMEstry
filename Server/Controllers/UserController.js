import UserModel from "../Models/UserModel";
import bcrypt from 'bcrypt'

 export const getUser = async(req,res)=>{
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id)
        const {password,...otherDetails} = user._doc
        user? res.status(200).json(otherDetails) : res.status(404).json("no such user exist")
    } catch (error) {
        res.status(500).json(error)
    }
 }

 export const updateuser = async(req,res)=>{
    const id = req.params.id;
    const {currentuserId,currentAdminStatus,password} = req.body
    
    if(id===currentuserId && currentAdminStatus)
    {
        try {
            if(password)
            {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password,salt);
            }
            const user= await UserModel.findByIdAndUpdate(id,req.body, {new:true})
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("Access denied ,Unpreviliged access")
    }

 }


 export const deleteuser = async(req,res)=>{

    const id= req.params.id;

    const {currentuserId,currentAdminStatus} = req.body;

    if(currentuserId === id && currentAdminStatus )
    {
        try {
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("User deleted successfully")
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else{
        res.status(403).json("Access denied ,Unpreviliged access")
    }

 }

 export const followuser = async (req,res)=>{

    const id = req.params.id;
    const {currentuserId} = req.body;

    if(currentuserId ===id )
    {
        res.status(403).json("Action forebiddin")
    }
    else{
        try {
            const followuser = await UserModel.findById(id)
            const followinguser = await UserModel.findById(currentuserId)

            if(!followuser.followers.includes(currentuserId))
            {
                await followuser.updateOne({$push : {followers: currentuserId}})
                await followinguser.updateOne({$push : {following : id}})
                res.status(200).json("user followed")
            }
            else{
                res.status(403).json("user is already followed")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

 }

 
 export const unfollowuser = async (req,res)=>{

    const id = req.params.id;
    const {currentuserId} = req.body;

    if(currentuserId ===id )
    {
        res.status(403).json("Action forebiddin")
    }
    else{
        try {
            const followuser = await UserModel.findById(id)
            const followinguser = await UserModel.findById(currentuserId)

            if(followuser.followers.includes(currentuserId))
            {
                await followuser.updateOne({$pull : {followers: currentuserId}})
                await followinguser.updateOne({$pull : {following : id}})
                res.status(200).json("user unfollowed")
            }
            else{
                res.status(403).json("user is not followed by you")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

 }