import React from 'react'
import './Post.css'
import like from '../img/like.png'
import share from '../img/share.png'
import comment from '../img/comment.png'
import notlike from '../img/notlike.png'
const Post = ({data}) => {
  return (
    <div className='Post'>
       <img src={data.img} alt="" />

       <div className='postReact'>
           <img src={data.liked?like:notlike} alt="" />
           <img src={comment} alt="" />
           <img src={share} alt="" />
       </div>
       <span>{data.likes} Likes</span>
       <div className='reaction'>
          <span><b>{data.name}</b> {data.desc}</span>
       </div>
    </div>
  )
}

export default Post;