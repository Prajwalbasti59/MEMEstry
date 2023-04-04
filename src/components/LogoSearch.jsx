import React from 'react'
import Logo from '../img/logo.png'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
   
<div className="LogoSearch">
{/* <img src={Logo} alt="" /> */}
<img src="https://img.icons8.com/external-filled-outline-wichaiwi/48/000000/external-movie-soft-power-filled-outline-wichaiwi.png"/>
<div className="Search">
    <input type="text" placeholder='#Explore' />
    <div className="s-icon">
    <img src="https://img.icons8.com/pastel-glyph/24/000000/search--v2.png"/>    </div>
</div>
</div>
  )
}

export default LogoSearch