import React,{useState} from 'react'
import './InfoCard.css'
import ProfileModal from './ProfileModal';
const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='InfoCard'>
          <div className='infoHead'>
            <h4>Your Info</h4>
            <div>
            <img src="https://img.icons8.com/office/24/000000/edit.png" onClick={()=>setModalOpened(true)}/>

           <ProfileModal 
           modalOpened = {modalOpened}
           setModalOpened ={setModalOpened}
           />
            </div>
          </div>

          <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard