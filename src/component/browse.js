import React, { useEffect, useState } from "react";
import { FaSearch} from "react-icons/fa";
import Player from "./player";
import{  Link } from "react-router-dom";




   const Browse = ({cant, search, cli, setisplaying}) =>{

      
        const [loading, setLoading] = useState(false);
        const [query, setQuery] = useState("");
      
      
    const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    await search(query);
    setLoading(false);
  };

     

    return(
        <div className="browseall">
        
            <div className="ko">
            
             <form onSubmit={handleSearch} className="search">
                         <input
                           type="text"
                           placeholder="Search here"
                           value={query}
                           onChange={(e) => setQuery(e.target.value)}
                         />
                         <button type="submit" style={{ backgroundColor: "transparent", border:"none"}}><FaSearch style={{color:"white", fontSize:"18px"}} /></button>
                       </form>
            
          
            </div>
  <div className="mp">
          {loading ? (
            <p style={{ color: "white", textAlign: "center" }}>Searching music...</p>
          ) : (
            cant.map((tra) => (
              <div className="al" key={tra.id}>
                <Link to={`/search/${tra.id}`} style={{ textDecoration: "none" }} onClick={cli}>
                  <img src={tra.album.cover_medium} alt={tra.title} onClick={() => setisplaying(true)}  />
                  <p style={{ color: "white" }}>{tra.title}</p>
                  <p style={{ color: "white" }}>{tra.artist.name}</p>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

    );
}
export default Browse;
