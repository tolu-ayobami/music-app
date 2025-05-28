import React, {useState, useEffect} from "react";
import "./App.css";
import{ Routes, Route, useNavigate } from "react-router-dom";
import TopMusic from "./TopMusic";

import Home from "./home";
import Player from "./player";
import Nav from "./nav";
import Browse from './browse';
import Search from "./search";

import { FaBars } from "react-icons/fa";



function App() {


  
  const [cant, setCant] = useState([]);

  const [cont, setCont] = useState("");

  const [hap, setHap] = useState("");



async function search(query) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b14cdc76d3msh5c2f0f522e69a8ep185189jsn2020afd82aac",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
    }
  };

  try {
    const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodeURIComponent(query)}`, options);
    const data = await response.json();
    console.log(data);
    setCant(data.data || []);
  } catch (error) {
    console.error("Search error:", error);
    setCant([]);
  }
}



const Get = (e) =>{
  setHap(e.target.value)
}



  const navGote =() =>{
    navigate("/browse");
    setCli(false)
    setOk(!ok);
}
 
  const navigate = useNavigate();

  const navGate =() =>{
      navigate("/");
      setCli(true)
      setOk(!ok);

  }

  
  const [sed, setSed] = useState(0);

  const [cli, setCli] = useState(true);

  const[ok, setOk] = useState(false);

  const [isplaying, setisplaying] = useState(false);
  
  const click = () =>{
    setCli(false);

}
  const hot = () =>{
      setOk(!ok);

  }
 
return(
  <div className="sec">

       <div className='barslog'>
            <span><h2 style={{color:"red"}}>Beatz</h2></span>
            <span className="bar"><FaBars onClick={hot}/></span>
          </div>
      
       

<div className='sectionall'>
<Nav get={navGate} het={navGote} ok={ok}  hot={hot} setok={setOk}/>

   <Routes>
    <Route path='/' element={ <Home  jat={setSed} isplaying={isplaying} setisplaying={setisplaying} /> }/>
    <Route path='/browse' element={ <Browse cant={cant} cli={click} search={search} get={Get}  pet={navGote} isplaying={isplaying} setisplaying={setisplaying}/> }/>
 
  </Routes>

</div>


{cli? <Player jet={sed} jat={setSed} isplaying={isplaying} setisplaying={setisplaying}/> : <Routes>
<Route path='/search/:playid' element={<Search cant={cant} search={search} get={Get} isplaying={isplaying} setisplaying={setisplaying}/>}/>
</Routes> }



  </div>


);

}
export default App;   