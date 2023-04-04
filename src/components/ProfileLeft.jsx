import React from 'react'
import './ProfileLeft.css'
import LogoSearch from './LogoSearch'
import FollowersCard from './FollowersCard'
import InfoCard from './InfoCard'
const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
      <LogoSearch></LogoSearch>
      <InfoCard></InfoCard>
      <FollowersCard></FollowersCard>
    </div>
  )
}

export default ProfileLeft