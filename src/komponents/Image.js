import React from "react";
import "../Style.css";

const Image = function (props) {
  console.log(props);
  const ImageRender = function () {
    return props.arr.map((val) => {
      return (
        <div key={val.id}>
          <img src={val.urls.regular} className="img-list"></img>
        </div>
      );
    });
  };
  return <div className="contan">{ImageRender()}</div>;
};

export default Image;
