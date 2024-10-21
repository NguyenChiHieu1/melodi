import React from "react";

const ArtistItem = ({ image, artist }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <img
        src={image}
        alt=""
        className="h-40 w-40 object-cover rounded-full transition-transform duration-[6000ms] ease-in-out transform hover:rotate-[360deg]"
      />
      <p className="">{artist}</p>
    </div>
  );
};

export default ArtistItem;
