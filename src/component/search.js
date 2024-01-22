import React, {useState, useEffect, useRef} from "react";
import { FaSearch} from "react-icons/fa";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import {FaStepBackward} from "react-icons/fa"
import {FaStepForward} from "react-icons/fa"
import {FaPlay} from "react-icons/fa"
import {FaPause} from "react-icons/fa"




const Search = ({cant, search, get, isplaying, setisplaying}) =>{

    const {playid} = useParams();


 const audioElem = useRef();

 const playpause = () =>{
setisplaying(!isplaying)
 }

 useEffect(() =>{
    
 if(isplaying){
    audioElem.current.play();
} else{
    audioElem.current.pause();
}
 })

    
    const het = (event) =>{
        event.preventDefault();
      }

    return(
    <div className="po">

<div className="browseall">
        
        <div className="ko">
        
         <form onSubmit={het} className="search">
            <input type="text" placeholder="Search here" onChange={get}/>
            <p onClick={search}><FaSearch /></p>
          </form>
        
          
        <hr></hr>
        </div>



        <div className="mp">

        {cant.map((tra) =>{
          
    return (
      
        <div className="al"  key={tra.id}>
          <Link to={`/search/${tra.id}`} style={{textDecoration:"none"}}  >
            <img src={tra.album.images[1].url} />
          
            <p style={{color:"white"}}>{tra.name}</p>
            <p style={{color:"white"}}>{tra.artists[0].name}</p>
            
            </Link>
        </div>
     
       
);
  })}
</div>

    </div>
    



      <div className="playerall">
    
                
             {cant.filter((item) => item.id === playid).map((tra) => {
              return (
                <div className="playercov">
            <div className="uy"  key={tra.id}>
                <img src={tra.album.images[1].url} />
                <div className="tite">
                <p style={{color:"white"}}>{tra.name}</p>
                <p style={{color:"white"}}>{tra.artists[0].name}</p>
                </div>
                <audio src={tra.preview_url}  ref={audioElem}/>
                <div className="control" style={{cursor:"pointer"}}>
                    <FaStepBackward  />
                    {isplaying? <FaPause onClick={playpause}/> :<FaPlay onClick={playpause}/>}
                    <FaStepForward   />
                </div>
            </div>
  </div>
                      
  );
})}
          
 
    </div>
    
    
    </div>

    
    
    );
}

export default Search;