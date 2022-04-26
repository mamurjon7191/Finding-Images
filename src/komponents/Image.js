import React from "react";
import "../StyleCard.css";
import ImageCard from "./ImageCard.js";

const Image = function (props) {
  const ImageRender = function () {
    return props.arr.map((val) => {
      return <ImageCard key={val.id} data={val} />;
    });
  };
  return <div className="img-list">{ImageRender()}</div>;
};

export default Image;
