import React, { useEffect, useState } from "react";
import { FaSearch} from "react-icons/fa";
import Player from "./player";
import{  Link } from "react-router-dom";




   const Browse = ({cant, search, get, cli, isplaying, setisplaying}) =>{

/*
      useEffect(() =>{
        var vb = document.querySelectorAll(".question-btn");
        var p = document.querySelector(".faq-header");
        var n = document.querySelector(".question-text");
       
       // var df = document.querySelector(".question-text");
       vb.forEach( function(vb){
        vb.addEventListener("click", function(vb){

           
            const question = vb.currentTarget.parentElement.parentElement;
            question.classList.toggle("show-text");
            //df.classList.toggle("show-text");
        });

       });

      }, [])















       <div className="faq-header" >
      <div className="faq-title">
        <p>How does FinChat work?</p>
        <button type="button" className="question-btn">
          close
        </button>
      </div>

       
    <div className="question-text">
        
          <ul className="star">
            <li> Register via the link</li>
            <li>Post, chat and meet new friends</li>
          </ul> 
           <p>
          <b>The below steps is optional but if you want to save and get interest</b>
           deposit any amount And you receive interest based on the amount, daily.
         Valid for 3 months. And then you renew or deposit higher to earn more interest.
        </p>
      </div>
      </div>


<div className="faq-header">
      <div className="faq-title">
        <p>How does FinChat make money?</p>
        <button type="button" className="question-btn">
         close
        </button>
      </div>

      
    <div className="question-text">
        <p>
          FinChat makes money from advertisements and business/company promotions and also partners/investors.
        </p>
      </div>
      </div>
*/
      
      
      const het = (event) =>{
        event.preventDefault();
      }


     

    return(
        <div className="browseall">
        
            <div className="ko">
            
             <form onSubmit={het} className="search" >
                <input type="text"  placeholder="Search here" onChange={get}/>
                <p onClick={search}><FaSearch /></p>
              </form>
            
          
            </div>



            <div className="mp">

            {cant.map((tra) =>{
              
        return (
          
            <div className="al"  key={tra.id}>
              <Link to={`/search/${tra.id}`} style={{textDecoration:"none"}} onClick={cli} >
                <img src={tra.album.images[1].url} onClick={() => setisplaying(true)} />
                <p style={{color:"white"}}>{tra.name}</p>
                <p style={{color:"white"}}>{tra.artists[0].name}</p>
                </Link>
            </div>
         
           
  );
      })}
    </div>
    


   

        </div>
        
       

        
    );
} 
export default Browse;
