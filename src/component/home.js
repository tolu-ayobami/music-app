import React, {useState, useEffect, useRef } from "react";
import { FaSearch} from "react-icons/fa";
import TopMusic from "./TopMusic";
import { FaHeart} from "react-icons/fa";
import{ Link} from "react-router-dom";







const Home = ({jat, isplaying, setisplaying}) =>{



    return(
        <div className="homeall">
       

          <div className="ab">
            <div className="cen">
              <Link to="/browse"style={{textDecoration:"none"}} >
            <div className="sear">
            <input type="text" placeholder="Search here" />
            <p><FaSearch /></p>
            </div>
            </Link>
            <hr></hr>
            
            <div className="boardall">

            <div className="board">
               <h2>Amazing Playlist</h2>
                <p>Listen to the best playlist curated by us and our users</p>
                <button className="boardbtn"><b>Listen Now</b></button>
            </div>

            </div>
            </div>
           
        <div className="classabout">
            <h3 style={{color: "white", fontWeight:"bold"}}>Top charts</h3>

            <ol className="ol">
             {TopMusic.slice(0,7).map((get, index) => {

               return(
                
                <li className="li" onClick={()=> jat(index)} >
                    <div className="fav"  onClick={() => setisplaying(true)}>
                 <img src={get.share.image}/>
                      <div className="word">
                   <p style={{color:"white", fontSize:"15px", fontWeight:"bold"}}>{get.title}</p>
                    <p style={{color:"white", fontSize:"13px"}}>{get.subtitle}</p>
                   </div>
                    </div>
           
            <span style={{marginRight:"15px"}}><FaHeart /></span>
            
                 </li>
                
              
                 );

                 })};
               
            </ol>
        </div>
            </div>

             <div className="ma">
                <h2 style={{color:"white"}}><b>New releases</b></h2>

            <div className="mu" >
               
             {TopMusic.slice(10,20).map((get, index) => {

          return(
         
           <div className="firstimg" onClick={()=> jat(index + 10)} >
            <img src={get.share.image} onClick={() => setisplaying(true)}/>
            <p style={{color:"white", fontSize:"15px", fontWeight:"bold"}}>{get.title}</p>
            <p style={{color:"white", fontSize:"13px"}}>{get.subtitle}</p>
           </div>
         
       
           );

             })};

           </div>
           <h2 style={{color:"white", marginTop:"20px"}}><b>Popular in your area</b></h2>

         <div className="mu1">
             {TopMusic.slice(21,31).map((get, index) => {

               return(
        
                <div className="secondimg" onClick={()=> jat(index + 21)}>
            <img src={get.share.image} onClick={() => setisplaying(true)}/>
            <p style={{color:"white", fontSize:"15px", fontWeight:"bold"}}>{get.title}</p>
            <p style={{color:"white", fontSize:"13px"}}>{get.subtitle}</p>

                 </div>
                 
           
                 );

                 })};
               </div>
              </div>
           
        </div>



    );
}

export default Home;