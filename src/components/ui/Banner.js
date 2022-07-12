import React from "react";

const Banner = ({ banner: { id, image } }) => {
  return (
    <div className="px-2">
      <a href="#">
        <img src={image} id={id} className="rounded-lg" />
      </a>
    </div>
  );
};

export default Banner;
