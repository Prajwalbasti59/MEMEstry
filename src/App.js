import "./App.css"
import React,{useState} from 'react'
import Home from "./pages/Home";
import Profile from "./components/Profile";
import Auth from "./pages/Auth";
import intro from '../src/img/intro.gif'
import Intro from "./components/Intro";
import { useEffect } from "react";
function App() {
  const [showcomponenet,setshowcomponent] = useState(false);
  const [showIntro,setshowintro] = useState(true)
  useEffect ( () =>{
     setInterval(() =>{
      setshowcomponent(true)
      setshowintro(false)
     },2530)
  },[])
  return ( 
    <div className="App">
       <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Home></Home>
           {/* {showIntro && <Intro/>}
           {showcomponenet  && <Home />  }       */}
        {/* <Auth></Auth> */}
    </div>
  );
}

export default App;



