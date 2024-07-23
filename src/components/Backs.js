import React from "react";
import fishes from "../video/fishes.mp4";

const Backs = () => {
  return (
    <div className="back">
      <video src={fishes} autoPlay loop muted />
    </div>
  );
};

export default Backs;
