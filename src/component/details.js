import React from "react";





const Details = ({veb}) =>{


    return(
    <div className="detailsall">
            <div className="uy" key={veb.key}>
              <img src={veb.share.image}/>

                <div className="tite">
                <p>{veb.title}</p>
                <p>{veb.subtitle}</p>
                </div>
                
              
            <audio src={veb.hub.actions[1].uri} controls />
           </div>



    </div>
    );
}

export default Details;