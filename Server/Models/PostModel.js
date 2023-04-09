import mongoose from "mongoose";


const UserSchema = mongoose.Schema(
    {
        userId:
        {
            type: String,
            required: true
        },

        desc:
        {
            type: String
            
        },
        likes: [],
       
        image:
        {
            type: String
           
        }
    },
    {timestamps: true}
)

const PostModel = mongoose.model("Posts",UserSchema)
export default PostModel;