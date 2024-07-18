import React from "react";

export default function Diversity() {
  return (
    <div className={"content-config"}>
      <div className={"content1"}>
        <img src="./Icons/dance.png" alt="" />
        <img
          style={{ position: "absolute", top: "12%", right: "32%" }}
          src="./Icons/dance2.png"
          alt=""
        />
      </div>
      <div className={"content2"}>
        <div className={"conTit1"}>
          <span style={{ fontSize: "25px", fontWeight: 600, color: "#251270" }}>
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
        <div className={"conTit2"}>
          <span style={{ fontSize: "18px", fontWeight: 500, color: "#251270" }}>
            카드뉴스, 숏폼 등 저작권 걱정없는 나만의 창의적인 콘텐츠를 만들 수
            있습니다.
          </span>
        </div>
      </div>
    </div>
  );
}
