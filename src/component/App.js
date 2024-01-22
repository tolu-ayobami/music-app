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



const CLIENT_ID = "ecdbc328a4f64a20a659ee809f4719c1";

const CLIENT_SECRET = "df7fce57db85437ea2b7d5a7b2f4eabe";

function App() {


  
  const [cant, setCant] = useState([]);

  const [cont, setCont] = useState("");

  const [hap, setHap] = useState("");



  useEffect(() =>{

      var authparameters ={
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials&client_id="+ CLIENT_ID + '&client_secret=' + CLIENT_SECRET
      }
      fetch("https://accounts.spotify.com/api/token", authparameters)
      .then(result => result.json())
      .then(data => setCont(data.access_token))

  }, []);


  
async function search() {

var artistparameters = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer "+ cont
  }
}
var artistID = await fetch("https://api.spotify.com/v1/search?q=" +   hap  + "&type=track", artistparameters)
.then(response => response.json())
.then(data => {
 return setCant(data.tracks.items);
 
})

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
    <Route path='/browse' element={ <Browse cant={cant} cli={click} search={search} get={Get}  pet={navGote} isplaying={isplaying} setisplaying={setisplaying}/> }/>z
 
  </Routes>

</div>


{cli? <Player jet={sed} jat={setSed} isplaying={isplaying} setisplaying={setisplaying}/> : <Routes>
<Route path='/search/:playid' element={<Search cant={cant} search={search} get={Get} isplaying={isplaying} setisplaying={setisplaying}/>}/>
</Routes> }



  </div>


);

}
export default App;   