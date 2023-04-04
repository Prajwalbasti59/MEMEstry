import React from 'react'
import './Profile.css'
import ProfileLeft from './ProfileLeft'
import ProfileCard from './ProfileCard'
import PostSide from './PostSide'
import RightSide from './RightSide'
const Profile = () => {
  return (
    <div className='Profile'>
         <ProfileLeft></ProfileLeft>

         <div className='Profile-center'>
             <ProfileCard></ProfileCard>
             <PostSide></PostSide>
         </div>

         <RightSide></RightSide>
    </div>
  )
}

export default Profile