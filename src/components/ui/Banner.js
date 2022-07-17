import React from "react";

const Banner = ({ banner: { id, image } }) => {
  return (
    <div className=" md:px-2">
      <a href="#">
        <img src={image} id={id} className=" md:rounded-lg" />
      </a>
    </div>
  );
};

export default Banner;
