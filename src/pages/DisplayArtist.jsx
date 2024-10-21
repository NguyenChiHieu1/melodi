import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import ArtistItem from "../components/ArtistItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplayArtist = () => {
  const { artistsData } = useContext(PlayerContext);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Artists Section */}
      <div className="my-10 mx-8">
        {" "}
        <div>
          <h1 className="my-5 font-bold text-2xl capitalize">
            Collection of <span className="text-[#0E9EEF]">Famous Artists</span>
          </h1>
        </div>
        {/* Grid of Artists */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {artistsData.map((item, index) => (
            <ArtistItem
              key={index}
              artist={item.username}
              image={item.profile_image}
              id={item._id}
            />
          ))}
        </div>
        {/* View All Section */}
        <div className="flex justify-center mt-10">
          <div className="flex justify-center flex-col text-white">
            <span className="w-16 h-16 bg-[#1E1E1E] rounded-full flex items-center justify-center cursor-pointer text-white text-3xl hover:bg-[#EE10B0]">
              +
            </span>
            <p className="text-[18px] font-bold cursor-pointer w-[5rem] text-center">
              View All
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayArtist;
