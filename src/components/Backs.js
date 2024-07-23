import React from "react";
import waveNature from "../video/waveNature.mp4";

const Backs = () => {
  return (
    <div className="back">
      <video src={waveNature} autoPlay loop muted />
    </div>
  );
};

export default Backs;
