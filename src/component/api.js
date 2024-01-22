
import React, {useState, useEffect} from "react";

import Tour from "./tour";



const CLIENT_ID = "ecdbc328a4f64a20a659ee809f4719c1";

const CLIENT_SECRET = "df7fce57db85437ea2b7d5a7b2f4eabe";

const Api = () =>{


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

 var artistID = await fetch("https://api.spotify.com/v1/search?q=" +   hap  + "&type=artist", artistparameters)
 .then(response => response.json())
 .then(data => {
  return data.artists.items[0].id;
 })

 console.log("artist id is" + artistID);


   var albums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/top-tracks' + '?include_groups=tracks&market=US&limit=20', artistparameters) 
   .then(response => response.json())
   .then(data =>{
    console.log(data.tracks);
    setCant(data.tracks);
    
   });
  
}

/*
var artistID = await fetch("https://api.spotify.com/v1/search?q=" +   hap  + "&type=track", artistparameters)
.then(response => response.json())
.then(data => {
 return data.tracks.items[0].id;
})

console.log("artist id is" + artistID);


var albums = await fetch('https://api.spotify.com/v1/tracks/' + artistID +  '&market=US&limit=20', artistparameters) 
.then(response => response.json())
.then(data =>{
 console.log(data);
 return setCant(data);
 */

console.log(cant);

    const Get = (e) =>{
        setHap(e.target.value)
      }
      
      
      const het = (event) =>{
        event.preventDefault();
      }
       
    return(
        <div>
            <form onSubmit={het}>
  <input type="text"  onChange={Get}/>
  <button onClick={search}>submit</button>
</form>

<Tour  cant={cant} cont={cont}/>


        </div>
    );
}
export default Api;