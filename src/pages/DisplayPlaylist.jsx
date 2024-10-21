import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import ListItem from "../components/ListItem";
import Navbar from "../components/Navbar";
import { useState } from "react";

const DisplayPlaylist = () => {
  const [pageAll, setPageAll] = useState("All");
  const { playlistsData, infoLogin, libraryData, openAddPlaylist } =
    useContext(PlayerContext);
  //   console.log("playlistsData", playlistsData);
  //   console.log("libraryData", libraryData);
  return (
    <>
      <Navbar />
      <div className="p-4">
        {/* Phần tiêu đề với các lựa chọn */}
        <div className="flex flex-row items-center space-x-4 mb-6 pb-3 border-b-2 border-gray-500">
          <h1 className="my-5 font-bold text-3xl capitalize">
            Your <span className="text-[#EE10B0]">PLayists</span>
          </h1>
          <p
            className={`w-[3%] text-xl ${
              pageAll === "All"
                ? `text-white text-3xl font-bold`
                : `text-gray-400 hover:text-white hover:text-xl`
            }  cursor-pointer  border-l-2 border-gray-500 transition duration-300 pl-4`}
            onClick={() => setPageAll("All")}
          >
            All
          </p>

          {/* "Mine" với hover và border left */}
          <p
            className={`w-[3%] text-xl ${
              pageAll === "Mine"
                ? `text-white text-3xl font-bold`
                : `text-gray-400 hover:text-white hover:text-xl`
            } cursor-pointer pl-4`}
            onClick={() => setPageAll("Mine")}
          >
            Mine
          </p>
        </div>

        {/* Grid cho các playlist */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Thêm playlist mới bg-[#5c4b5b]*/}
          <div className="flex flex-col items-center justify-center h-full   cursor-pointer hover:bg-[#6b5c6b] transition duration-300 ease-in-out">
            <div
              className="h-full w-full flex flex-col justify-center items-center border border-white rounded-lg"
              onClick={() => openAddPlaylist(null, null, null)}
            >
              <i className="bi bi-plus-circle text-4xl text-white"></i>
              <p className=" text-xl font-medium text-white mt-4">
                Add new playlist
              </p>
            </div>
          </div>

          {/* Hiển thị các playlist hiện có */}
          {pageAll === "All" &&
            libraryData?.playlists?.map((item) => (
              <ListItem
                key={item._id}
                image={item.image}
                namePlaylist={item.name}
                nameAuthor={item.user.username}
                id={item._id}
              />
            ))}
          {pageAll === "Mine" &&
            playlistsData.map((item) => (
              <ListItem
                key={item._id}
                image={item.image}
                namePlaylist={item.name}
                nameAuthor={item.user.username}
                id={item._id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default DisplayPlaylist;
