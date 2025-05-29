import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaStepBackward, FaStepForward, FaPlay, FaPause } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

const Search = ({ cant, search, isplaying, setisplaying }) => {
  const { playid } = useParams();
  const audioElem = useRef();

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const playpause = () => {
    setisplaying(!isplaying);
  };

  useEffect(() => {
    if (isplaying) {
      audioElem.current?.play();
    } else {
      audioElem.current?.pause();
    }
  }, [isplaying]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    await search(query);
    setLoading(false);
  };

  const selectedTrack = cant.find((item) => item.id.toString() === playid);

  return (
    <div className="po">
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
          <hr />
        </div>

        <div className="mp">
          {loading ? (
            <p style={{ color: "white", textAlign: "center" }}>Searching music...</p>
          ) : (
            cant.map((tra) => (
              <div className="al" key={tra.id}>
                <Link to={`/search/${tra.id}`} style={{ textDecoration: "none" }}>
                  <img src={tra.album.cover_medium} alt={tra.title} />
                  <p style={{ color: "white" }}>{tra.title}</p>
                  <p style={{ color: "white" }}>{tra.artist.name}</p>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="playerall">
        {selectedTrack && (
          <div className="playercov">
            <div className="uy" key={selectedTrack.id}>
              <img src={selectedTrack.album.cover_medium} alt={selectedTrack.title} />
              <div className="tite">
                <p style={{ color: "white" }}>{selectedTrack.title}</p>
                <p style={{ color: "white" }}>{selectedTrack.artist.name}</p>
              </div>

              {selectedTrack.preview ? (
                <>
                  <audio ref={audioElem} src={selectedTrack.preview} />
                  <div className="control" style={{ cursor: "pointer" }}>
                    <FaStepBackward />
                    {isplaying ? (
                      <FaPause onClick={playpause} />
                    ) : (
                      <FaPlay onClick={playpause} />
                    )}
                    <FaStepForward />
                  </div>
                </>
              ) : (
                <p style={{ color: "whitesmoke", marginTop: "1rem" }}>No preview available for this track</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

