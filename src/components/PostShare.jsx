import React, {useState, useRef} from 'react'
import './PostShare.css'
import Profileimg from '../img/profileImg.jpg'

const PostShare = () => {
    const [image,setImage] = useState(null)
    const imageRef = useRef();
    const OnChangeHandler = (e) =>{
       if(e.target.files && e.target.files[0])
       {
         var img = e.target.files[0];
         setImage({
            image : URL.createObjectURL(img),
         })
       }
    }
  return (
    <div className='PostShare'>
         <img src={Profileimg} alt="" />
         <div>
            <input type="text" name="" id="" placeholder='Whats popin?' />
         
         <div className='postOptions'>
             <div className='option'
             onClick={()=>imageRef.current.click()}
             >
               <img src="https://img.icons8.com/external-anggara-filled-outline-anggara-putra/32/000000/external-image-social-media-interface-anggara-filled-outline-anggara-putra.png"/>
               Photo
             </div>
             <div className='option'>
               <img src="https://img.icons8.com/external-flat-icons-inmotus-design/32/000000/external-Play-ui-flat-icons-inmotus-design.png"/>
                video
             </div>
             <div className='option'>
             <img src="https://img.icons8.com/avantgarde/32/000000/user-location.png"/>
                Location
             </div>
             <div className='option'>
             <img src="https://img.icons8.com/stickers/32/000000/overtime.png"/>
                Date
             </div>

             <button className='button '>
                Share
             </button>
             <div style={{display : 'none'}}>
                <input type="file" ref={imageRef} onChange={OnChangeHandler} />
             </div>
          </div>
          {image && (

            <div className="previewImage">
            <button src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png" onClick={()=>setImage(null)}>X</button>
            <img src={image.image} alt="" />
            </div>

            )}
            
        </div>
    </div>
  );
};

export default PostShare