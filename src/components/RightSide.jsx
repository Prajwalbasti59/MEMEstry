import React,{useState} from 'react'
import './RightSide.css'
import TrendCard from './TrendCard.jsx'
import ShareModal from './ShareModal'
import movie from '../img/movie.gif'
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className='RightSide'>
      <div className='navIcons'>
        <img src="https://img.icons8.com/arcade/38/000000/experimental-home-arcade.png"/>
        <img src="https://img.icons8.com/avantgarde/38/000000/appointment-reminders.png"/>
        <img src="https://img.icons8.com/arcade/64/000000/experimental-comments-arcade.png"/>
        <img src="https://img.icons8.com/external-justicon-flat-justicon/38/000000/external-setting-notifications-justicon-flat-justicon.png"/>
      </div>
      
      <div className='recommendor'>
        <img src={movie} className='movie' onClick={()=> window.open("https://movieflix-recommender.herokuapp.com/", "_blank")}  />
      </div> 
      <TrendCard>
      </TrendCard>
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default RightSide