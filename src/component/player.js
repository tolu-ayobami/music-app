import React, {useState, useEffect, useRef } from "react";
import TopMusic from "./TopMusic";
import {FaStepBackward} from "react-icons/fa"
import {FaStepForward} from "react-icons/fa"
import {FaPlay} from "react-icons/fa"
import {FaPause} from "react-icons/fa"




   const Player = ({jet, jat, isplaying, setisplaying}) =>{

    

    const audioElem = useRef();

    const playpause = () =>{
        setisplaying(!isplaying)
    }
    
    

    useEffect(() =>{
        if(isplaying){
            audioElem.current.play();
         
        } else {
            audioElem.current.pause();
        }
    })



    const get = (number) =>{
        if(number > TopMusic.length - 1){
             return 0;
    
        }
        if(number < 0){
           return TopMusic.length -1;
        }
        return number;
        
    }

    const feg = () =>{
        jat((jet)=>{
   let nen = jet+ 1;
   setisplaying(false)
   return get(nen);
        })   
   }
   
   
   
   const teg = () =>{
    jat((jet)=>{
           let gut = jet - 1;
           setisplaying(false)
           return get(gut);
          })
       
   }
    
    const{key, title, subtitle, share, hub} = TopMusic[jet]
    
    return(
        <div className="po">
          
       
        <div className="playerall">

   
            <div className="playercov">
                
              <div className="uy" key={key}>
              <img src={share.image}/>

                <div className="tite">
                <p style={{fontSize:"14px"}}>{title}</p>
                <p style={{fontSize:"14px"}}>{subtitle}</p>
                </div>
                
              
                <audio src={hub.actions[1].uri} ref={audioElem} />
                <div className="control" style={{cursor:"pointer"}}>
                    <FaStepBackward  onClick={teg}/>
                    {isplaying? <FaPause onClick={playpause} /> : <FaPlay onClick={playpause}/>}
                    <FaStepForward  onClick={feg} />
                </div>
           </div>
                
            </div>
        
        
        
            
            </div>

        </div>
    );

}

export default Player;

