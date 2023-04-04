import React from 'react'
import profile from '../img/profileImg.jpg'
import cover from '../img/cover.jpg'
import './ProfileCard.css'
const ProfileCard = () => {
    const ProfilePage = true;
  return (
    <div className='ProfileCard'> 
        <div className='ProfileImages'>
        <img src={cover} alt="" />
        <img src={profile} alt="" />
        </div>

        <div className='ProfileName'>
           <span>Isebella Sermon</span>           
           <span>Actor</span>
        </div>

        <div className='followStatus'>
            <hr />
            <div className='follow'>
                <span>69</span>
                <span>followers</span>
            </div>
            <div className='vl'></div>
            <div className='follow'>
                <span>1</span>
                <span>following</span>

                {ProfilePage && (
                    <>
                    <div className='vl'>

                    </div>
                    <div className='follow'>
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                    </>
                )}
            </div>
            <hr />
        </div>
        {ProfilePage?'':<span>My Profile</span>}
        
    </div>
  )
}

export default ProfileCard