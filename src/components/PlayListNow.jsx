import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useState, useEffect } from "react";

const PlayListNow = () => {
  const [isVisiable, setIsVisiable] = useState({
    id: "",
    visiable: false,
  });
  const {
    playListNow,
    isShowListPlay,
    track,
    playWithId,
    libraryData,
    removeFromLibrary,
    addToLibrary,
    removeSongFromQueue,
    infoPlayListNow,
  } = useContext(PlayerContext);

  const handleRemoveFromLibrary = async (songId) => {
    await removeFromLibrary({
      song: songId,
      album: null,
      artist: null,
      playlist: null,
    });
  };

  const handleAddToLibrary = async (songId) => {
    await addToLibrary({
      song: songId,
      album: null,
      artist: null,
      playlist: null,
    });
  };

  return (
    <div
      className={`fixed  right-0 top-0 h-[88%] bg-[#334452] w-80 shadow-lg p-4 overflow-y-auto transform transition-transform duration-1000 ease-in-out flex flex-col ${
        isShowListPlay ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      {/* Header of the Playlist */}
      <div className="text-center py-4 border-b-2">
        <h2 className="text-base text-white font-semibold">Now Playing</h2>
      </div>
      <div className="flex flex-row items-center gap-1">
        <img
          src={infoPlayListNow?.image}
          alt="Album image"
          className="w-12 h-12 rounded-full transition-transform duration-[6000ms] ease-in-out transform rotate-[360deg]"
        />
        <div className="flex flex-col text-white">
          <p className="font-medium text-sm truncate">{infoPlayListNow.name}</p>
          <p className="text-sm text-gray-300 truncate">
            {/* {infoPlayListNow?.artist.map((item) => item.username).join(", ")} */}
          </p>
        </div>
      </div>
      {/* Playlist items */}
      <div className="flex flex-col gap-1 mt-5 text-white ">
        {playListNow && playListNow.length > 0 ? (
          playListNow.map((song, index) => (
            <div
              key={index}
              className={`rounded-md group relative grid grid-cols-[3.5fr_0.5fr] items-center gap-4 border-b border-gray-500 hover:bg-[#734570] cursor-pointer ${
                song?._id === track?._id && `bg-[#734570]`
              }`}
            >
              <div className="flex flex-row items-center gap-1">
                <img
                  src={song?.image}
                  alt={song?.title}
                  className="w-12 h-12 rounded"
                />
                <div className="flex flex-col">
                  <p className="font-medium text-sm truncate">{song.title}</p>
                  <p className="text-sm text-gray-300 truncate">
                    {song?.artist.username}
                  </p>
                </div>
                <i
                  className="bi bi-play-fill text-2xl text-white absolute left-3 top-3 opacity-0 cursor-poiter group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => {
                    playWithId(song?._id);
                  }}
                ></i>
              </div>
              <div className="flex flex-row justify-center">
                {libraryData?.songs?.length > 0 &&
                libraryData?.songs?.includes(song._id) ? (
                  <i
                    className="bi bi-heart-fill text-[#f348e5]  text-base"
                    title="Remove song to your libary"
                    onClick={() => handleRemoveFromLibrary(id)}
                  ></i>
                ) : (
                  <i
                    className="bi bi-heart hover:text-[#f348e5] text-base hidden items-center group-hover:flex"
                    title="Add to your libary"
                    onClick={() => handleAddToLibrary(id)}
                  ></i>
                )}
                <div className="group flex justify-center items-center relative h-10 w-10">
                  <i
                    className={`bi bi-three-dots rounded-full hover:bg-gray-400 px-1 ${
                      isVisiable.id === song?._id && isVisiable.visiable
                        ? "flex"
                        : "hidden group-hover:flex"
                    } items-center  cursor-pointer`}
                    onClick={() =>
                      setIsVisiable({
                        id: song._id,
                        visiable: !isVisiable.visiable,
                      })
                    }
                  ></i>
                  {isVisiable.id === song?._id && isVisiable.visiable && (
                    <div className="absolute top-7 -left-40 z-50 flex-col w-[205px] bg-gray-400  rounded-lg group-hover:flex">
                      <div
                        className=" grid grid-cols-[0.5fr_3fr] items-center gap-0 h-10 pl-5 hover:bg-[#914c79] rounded-lg hover:text-white cursor-pointer"
                        onClick={() => removeSongFromQueue(song?._id)}
                      >
                        <i className="bi bi-trash hover:text-white text-sm"></i>
                        <p className="text-sm">Delete now playlist</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-10 text-gray-500">No songs available</p>
        )}
      </div>
    </div>
  );
};

export default PlayListNow;
