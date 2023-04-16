import React from 'react'
import action from '../img/giphy.gif'
import { useEffect,useState } from "react";
import './Auth.css'

const Auth = () => {

  const [isSignUp,setSignUp] = useState(false);
  const [data,setdata] = useState({"firstname" :"", "lastname" :"","username" :"","password" :"","confirmpass" :""})
  const [confirmpass,setconfirmpass] = useState(false)
  const handleChange =(e) =>{
   setdata({...data, [e.target.name] : e.target.value})
  }
  return (
    <div className='Auth'>
          <div className='a-left'>
           <div className='Webname'>
              {/* <img src={action} alt="" /> */}
              {/* <h1>Movie Flix</h1>
          <h6>Explore the ideas throughout the world</h6> */}
           </div>
          </div>
         
    <div className="car">
      <form className="infoForm authForm">
      <img src="https://img.icons8.com/external-filled-outline-wichaiwi/128/000000/external-movie-soft-power-filled-outline-wichaiwi.png"/>
        <h2>{isSignUp? "Sign up":"Log In"}</h2>

        {isSignUp &&
          <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            onChange={handleChange}
          />
        </div>
}
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {isSignUp &&
            <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
          />}
        </div>
        <span style={{display : confirmpass?"none":"block"}}>
              Confirm passowrd is not matching !
        </span>
        <div>
            <span style={{fontSize: '18px',cursor: "pointer"} }  onClick={()=> setSignUp((prev)=>!prev)}>{isSignUp? "Already have an account. Login!" : "Don't have an account? SignUp"}</span>
        </div>
        <button className="button infoButton" type="submit">{isSignUp? "Signup":"Login" }</button>
      </form>
    </div>

    </div>
  )
}
function LogIn() {
    return (
      <div className="car">
        <form className="infoForm authForm">
        <img src="https://img.icons8.com/external-filled-outline-wichaiwi/128/000000/external-movie-soft-power-filled-outline-wichaiwi.png"/>

          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }
function SignUp() {
  return (
    <div className="car">
      <form className="infoForm authForm">
      <img src="https://img.icons8.com/external-filled-outline-wichaiwi/128/000000/external-movie-soft-power-filled-outline-wichaiwi.png"/>
        <h2>Sign up</h2>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
            <span style={{fontSize: '18px'}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth