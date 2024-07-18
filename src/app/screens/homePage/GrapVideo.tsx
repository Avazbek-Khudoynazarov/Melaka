import React from "react";

export default function VideoGraphytoon() {
  return (
    <div className={"video-config"}>
      <div className={"titVid"}>
        <span style={{ fontSize: "45px", fontWeight: 700, color: "#1174ED" }}>
          내가 그린 그림이 움직이는 모션드로잉
        </span>
      </div>
      <div className={"main-video"}>
        <video autoPlay loop muted>
          <source src="./Video/graphytoonVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
