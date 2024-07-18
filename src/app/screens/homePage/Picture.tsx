import React from "react";

export default function Picture() {
  return (
    <div className={"picture-config"}>
      <img
        src="./backImg/jem2.png"
        alt=""
        style={{
          position: "absolute",
          top: "2.9px",
          height: "600px",
          width: "100%",
        }}
      />
      <div className={"pic-con"}>
        <div className={"btnPic"}>
          <button>그래피툰을 선택하는 이유</button>
        </div>
        <img src="./backImg/grapPic.png" alt="" />
        <div className={"pic-tit"}>
          <span>
            그래피툰은 애니메이션 스토리텔링 콘텐츠 제작을 위한도구 입니다.
            툴바의 다양한 기능들과 함꼐 AI 기술을 더하여 창의적인 콘텐츠를 만들
            수 있습니다. 그래피툰으로 새로운 콘텐츠 트렌드 세터가 되어보세요!
          </span>
        </div>
      </div>
    </div>
  );
}

//TODO I am gonna finish it at the last stage of project
