import React from 'react'
import './Intro.css'
import intro from '../img/intro.gif'
const Intro = () => {
  return (
    <div className='Intro'>
        <div >
         
           {/* <img src="https://codemyui.com/wp-content/uploads/2017/02/android-marshmallow-boot-animation.gif" alt="" /> */}
           <div class = "container">
           <img  src={intro} alt="" />
            {/* <h1>MovieTime!!🍿</h1> */}
            </div>
        </div>
    </div>
  )
}

export default Intro