import React from 'react'
import PostShare from './PostShare'
import Posts from './Posts'
const PostSide = () => {
  return (
    <div className='PostSide'>
       <PostShare></PostShare>  
       <Posts></Posts>
    </div>
  )
}

export default PostSide