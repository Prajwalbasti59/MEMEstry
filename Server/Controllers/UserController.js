import UserModel from "../Models/UserModel";


 export const getUser = async(req,res)=>{
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id)

        user? res.status(200).json(user) : res.status(400)
    } catch (error) {
        res.status(500).json(error)
    }
 }