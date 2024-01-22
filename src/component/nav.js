
import React, {useState} from "react";
import{ Link} from "react-router-dom";
import { FaHome} from "react-icons/fa";
import { FaThLarge} from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { FaMusic} from "react-icons/fa";
import { FaTimes} from "react-icons/fa";


const Nav = ({get, het, ok, hot}) =>{


    return(
        <div className="navall">

        
            <div className={ok? "navcover cov" : "navcover" }>
            <div className="times">
            <div className="logo">
            <span className="famusic"><FaMusic/></span>
          <span><h2>Beatz</h2></span>
          </div>
          <span className="time"><FaTimes onClick={hot}/></span>
            </div>


            <div className='nav'>
            
                <div className="home"  onClick={get}>
                <p><FaHome /></p>
                <h3>Home</h3>
                </div>
               

                <div className="home" onClick={het}>
                <p><FaThLarge /></p>
                <h3>Browse</h3>
                </div>
               


                <div className="home">
                <p><FaHeadset/></p>
                <h3>Playlist</h3>
                </div>

                <div className="home">
                <p><FaHeart /></p>
                <h3>Favorites</h3>
                </div>
                
            </div>


           < div className="btnpart">

           <hr className="hr"></hr>
              <button className="btn">Login</button>
              
          </div>
            



            </div>

           
          



        </div>



    );
}

export default Nav;