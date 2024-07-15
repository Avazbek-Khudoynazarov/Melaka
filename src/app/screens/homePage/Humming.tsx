import React from "react";

export default function HummingBlocks() {
  return (
    <div className={"configHom"}>
      <img
        style={{
          position: "absolute",
          bottom: 0,
          aspectRatio: "1 / 1",
          width: "100%",
          height: "286px",
          zIndex: 100,
        }}
        src="./Icons/bottom.png"
        alt=""
      />
      <div className={"HumCenter"}>
        <div className="HumTit">
          <span>허밍블럭스 캐릭터 소개</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "1px" }}>
          <div className={"mainBlock"}>
            <img style={{ zIndex: 100 }} src="./Icons/emoticon.png" alt="" />
            <img
              style={{ width: "203px", height: "66px", top: "32%" }}
              src="./Icons/circle.png"
              alt=""
            />
            <div
              className={"block"}
              style={{ background: "rgba(226, 194, 77, 1)" }}
            ></div>
          </div>
          <div className={"mainBlock"}>
            <img style={{ zIndex: 100 }} src="./Icons/emoticon2.png" alt="" />
            <img
              style={{ width: "203px", height: "66px", top: "32%" }}
              src="./Icons/circle2.png"
              alt=""
            />
            <div
              className={"block"}
              style={{ background: "rgba(77, 100, 203, 1)" }}
            ></div>
          </div>
          <div className={"mainBlock"}>
            <img
              style={{ zIndex: 100, top: "5%" }}
              src="./Icons/emoticon3.png"
              alt=""
            />
            <img
              style={{ width: "203px", height: "66px", top: "32%" }}
              src="./Icons/circle3.png"
              alt=""
            />
            <div
              className={"block"}
              style={{ background: "rgba(187, 157, 128, 1)" }}
            ></div>
          </div>
          <div className={"mainBlock"}>
            <img
              style={{ zIndex: 100, top: "8%" }}
              src="./Icons/emoticon4.png"
              alt=""
            />
            <img
              style={{ width: "203px", height: "66px", top: "32%" }}
              src="./Icons/circle4.png"
              alt=""
            />
            <div
              className={"block"}
              style={{ background: "rgba(85, 88, 90, 1)" }}
            ></div>
          </div>
          <div className={"mainBlock"}>
            <img
              style={{ zIndex: 100, height: "320px" }}
              src="./Icons/emoticon5.png"
              alt=""
            />
            <img
              style={{ width: "203px", height: "66px", top: "32%" }}
              src="./Icons/circle5.png"
              alt=""
            />
            <div
              className={"block"}
              style={{ background: "rgba(213, 102, 114, 1)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
