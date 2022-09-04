import React from "react";
import gif from "./gif/developer_med.gif";
import "./gif.css";

function Gif() {
  return <img className="gif" src={gif} alt="coding" />;
}

export default Gif;
