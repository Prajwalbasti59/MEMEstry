import React from 'react'
import './Home.css'
import ProfileSide from '../components/ProfileSide'
import PostSide from '../components/PostSide'
import RightSide from '../components/RightSide'

function  Home() {
  return (
    <div className='Home'> 
       <ProfileSide></ProfileSide>
        <PostSide></PostSide>
        <RightSide/>
    </div>
  )
}

export default  Home