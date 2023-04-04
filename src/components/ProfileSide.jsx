import React from 'react'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'
import FollowersCard from './FollowersCard'
const ProfileSide = () => {
  return (
    <div className='profileSide'>
        <LogoSearch></LogoSearch>
        <ProfileCard></ProfileCard>
        <FollowersCard></FollowersCard>
    </div>
    
  )
}

export default ProfileSide