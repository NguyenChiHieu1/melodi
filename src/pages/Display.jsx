import React, { useEffect, useRef } from "react";
import DisplayHome from "./DisplayHome";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
// import { albumsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import Footer from "../components/Footer";
import DisplayPlaylist from "./DisplayPlaylist";
import DisplayPlaylistId from "./DisplayPlaylistId";
import DisplayDiscover from "./DisplayDiscover";
import DisplayPageAlbum from "./DisplayPageAlbum";
import DisplayArtist from "./DisplayArtist";

const Display = () => {
  const { albumsData } = useContext(PlayerContext);

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  // const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  // const bgColor = albumsData[Number(albumId)].bgColor;
  const bgColor =
    isAlbum && albumsData.length > 0
      ? albumsData.find((x) => x._id === albumId)?.bg_colour
      : "#121212";
  // console.log("bg",bgColor)

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#412C3A`;
    }
  });
  return (
    <div ref={displayRef} className="w-[100%] overflow-auto lg:w-[85%]">
      <div className="w-[100%] mx-5 px-6 pt-4 rounded text-white overflow-auto lg:ml-0">
        {albumsData.length > 0 ? (
          <Routes>
            <Route path="/" element={<DisplayHome />} />
            <Route
              path="/album/:id"
              element={
                <DisplayAlbum
                  album={albumsData.find((x) => x._id === albumId)}
                />
              }
            />
            <Route path="/playlist">
              <Route index element={<DisplayPlaylist />} />
              <Route path=":id" element={<DisplayPlaylistId />} />
            </Route>
            <Route path="/discover" element={<DisplayDiscover />} />
            <Route path="/albums" element={<DisplayPageAlbum />} />
            <Route path="/artists" element={<DisplayArtist />} />
          </Routes>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Display;
