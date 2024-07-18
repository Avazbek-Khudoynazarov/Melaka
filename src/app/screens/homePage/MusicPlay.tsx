import React from "react";

export default function PlayDirection() {
  return (
    <div className={"music-config"}>
      <div className={"rest"}>
        <div className={"music1"}>
          <div className={"musicTit"}>
            <span
              style={{ fontSize: "25px", fontWeight: 600, color: "#251270" }}
            >
              동영상, 슬라이드, 애니메이션까지
            </span>
            <span
              style={{
                fontSize: "45px",
                fontWeight: 700,
                color: "#251270",
              }}
            >
              다양한 콘텐츠 제작
            </span>
          </div>
          <div className={"musicTit2"}>
            <span
              style={{ fontSize: "18px", fontWeight: 500, color: "#251270" }}
            >
              카드뉴스, 숏폼 등 저작권 걱정없는 나만의 창의적인 콘텐츠를 만들 수
              있습니다.
            </span>
          </div>
        </div>
        <div className="music2">
          <img src="./Icons/music.png" alt="" />
        </div>
      </div>
    </div>
  );
}
