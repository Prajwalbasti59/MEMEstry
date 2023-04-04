import React from 'react'
import {PostsData} from '../Data/PostsData'
import './Posts.css'
import Post from './Post.jsx'
const Posts = () => {
  return (
    <div className='Posts'>
    {PostsData.map((posts,id)=>{
         return <Post data={posts} id={id}/>
    })}
  
  </div>
  );
}

export default Posts;