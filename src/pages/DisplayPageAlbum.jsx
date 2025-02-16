import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AlbumItem from "../components/AlbumItem";
import { PlayerContext } from "../context/PlayerContext";
import ArtistItem from "../components/ArtistItem";
import SongItem from "../components/SongItem";
import { useLocation, useNavigate } from "react-router-dom";
import TrendAlbumTable from "../components/TrendAlbumTable";

const DisplayPageAlbum = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { albumsData, songsDataNew, artistsData, playlistsPublicData } =
    useContext(PlayerContext);
  const [topIndex, setTopIndex] = useState(10);

  useEffect(() => {
    // Kiểm tra nếu URL chứa "#vitri"
    if (location.hash === "#3") {
      const vitriElement = document.getElementById("3");
      if (vitriElement) {
        vitriElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <div id="3"></div>
      {/* Albums */}
      <div className="my-10">
        <div>
          <h1 className="my-5 font-bold text-3xl capitalize">
            Collection of <span className="text-[#0E9EEF]"> best Albums</span>
          </h1>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 ">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              artist={item.artist.map((artist) => artist.username).join(", ")}
              id={item._id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* List Artist */}
      {/* <div className="my-10 ">
        <h1 className="my-5 font-bold text-3xl capitalize">
          Popular <span className="text-[#0E9EEF]">Artists</span>
        </h1>
        <div className="flex overflow-auto gap-4">
          {artistsData.slice(0, 8).map((item, index) => (
            <ArtistItem
              key={index}
              artist={item.username}
              image={item.profile_image}
              id={item._id}
            />
          ))}
          <div className="flex justify-center flex-col text-white ml-4 hover:text-[#EE10B0]">
            <span className="w-16 h-16 bg-[#1E1E1E] rounded-full flex items-center justify-center cursor-pointer text-white text-3xl hover:bg-[#EE10B0]">
              +
            </span>
            <p className="text-[18px] font-bold cursor-pointer w-[5rem]">
              View All
            </p>
          </div>
        </div>
      </div> */}

      {/* Trendinge Songs */}
      <div className="my-10 ">
        <h1 className="mx-5 font-bold text-3xl capitalize">
          Favorite
          <span className="text-[#0E9EEF]"> albums charts </span>
        </h1>
        <TrendAlbumTable
          top={topIndex}
          setTop={() => setTopIndex((prev) => prev + 10)}
        />
      </div>

      {/* Favorite Playlist */}
      <div className="my-10 ">
        <h1 className="my-5 font-bold text-3xl capitalize">
          Favorite <span className="text-[#EE10B0]">Playlist</span>
        </h1>
        <div className="flex overflow-auto gap-4">
          <div className="flex overflow-auto gap-4">
            {playlistsPublicData.slice(0, 6).map((item, index) => (
              <div
                className="rounded-lg w-[280px] h-full  cursor-pointer flex flex-col items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-30"
                key={item._id}
                onClick={() => navigate(`/playlist/${item._id}`)}
              >
                <img
                  src={item.image || assets.album_default}
                  alt={item.name}
                  className="w-full h-[80%] object-cover rounded-lg"
                />
                <div className="flex flex-row items-center justify-between w-full px-2 mt-2 h-[20%] ">
                  <h1 className="text-lg font-bold text-white text-center">
                    {item.name}
                  </h1>
                  <i className="bi bi-music-note-list text-white"></i>
                </div>
                {/* <p>{item.description}</p> */}
              </div>
            ))}
            <div
              className="flex justify-center flex-col text-white ml-4 hover:text-[#EE10B0]"
              onClick={() => navigate("/your-playlist/favorite/#5")}
            >
              <span className="w-16 h-16 bg-[#1E1E1E] rounded-full flex items-center justify-center cursor-pointer text-white text-3xl hover:bg-[#EE10B0]">
                +
              </span>
              <p className="text-[18px] font-bold cursor-pointer w-[5rem]">
                View All
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Release sóng */}
      <div className="my-10 ">
        <h1 className="my-5 font-bold text-3xl capitalize">
          Songs you <span className="text-[#EE10B0]">might like</span>
        </h1>
        <div className="flex overflow-auto gap-4">
          <div className="flex overflow-auto gap-4">
            {songsDataNew.slice(0, 6).map((item, index) => (
              <SongItem
                key={index}
                name={item.title}
                // desc={item.desc}
                artist={item.artist.username}
                id={item._id}
                image={item.image}
              />
            ))}
            <div className="flex justify-center flex-col text-white ml-4 hover:text-[#EE10B0]">
              <span className="w-16 h-16 bg-[#1E1E1E] rounded-full flex items-center justify-center cursor-pointer text-white text-3xl hover:bg-[#EE10B0]">
                +
              </span>
              <p className="text-[18px] font-bold cursor-pointer w-[5rem]">
                View All
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPageAlbum;
