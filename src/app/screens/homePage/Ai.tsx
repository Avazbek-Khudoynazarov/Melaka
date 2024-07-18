import React from "react";

export default function ProfessionalAI() {
  return (
    <div className={"Ai-config"}>
      <img
        style={{
          position: "absolute",
          bottom: "10%",
          right: "12%",
          zIndex: 99,
        }}
        src="./Icons/rebbit2.png"
        alt=""
      />
      <div className={"titAi"}>
        <span>
          <b>AI</b> 기술로 완성하는 콘텐츠 제작
        </span>
      </div>
      <div>
        <div className={"firstDiv"}>
          <div className={"top"}>
            <div className={"middleDiv"}>
              <div className={"center"}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: 600,
                      color: "#251270",
                    }}
                  >
                    텍스트 음성 변환
                  </span>{" "}
                  <span>Text to Speech</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#464646",
                    }}
                  >
                    텍스트를 바탕으로오디오 파일을 생성하여 타임라인에
                    업로드합니다 영상의 나레이션으로 활용해보세요
                  </span>
                </div>
              </div>
              <div className={"circle"}>
                <img src="./backImg/back1.png" alt="" />
              </div>
            </div>
          </div>
          <div className={"top"}>
            <div className={"middleDiv"}>
              {" "}
              <div className={"center"}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: 600,
                      color: "#251270",
                    }}
                  >
                    음성 텍스트 변환
                  </span>{" "}
                  <span>Speech to Text</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#464646",
                    }}
                  >
                    녹음한 음성 파일을 바탕으로 초 단위로 텍스트 생성합니다.
                    편리하게 자막을 추가해보세요
                  </span>
                </div>
              </div>
              <div className={"circle"}>
                <img src="./backImg/back2.png" alt="" />
              </div>
            </div>
          </div>
          <div className={"top"}>
            <div className={"middleDiv"}>
              <div className={"center"}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: 600,
                      color: "#251270",
                    }}
                  >
                    배경 제거
                  </span>{" "}
                  <span>Remove Background</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#464646",
                    }}
                  >
                    이미지를 드래그 앤 드롭하여 배경이미지 제거 할 수 있습니다
                    간편한 작업으로 효율을 높이고 깔끔하고 전문적인 결과를
                    경험해보세요
                  </span>
                </div>
              </div>
              <div className={"circle"}>
                <img src="./backImg/back3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={"secondDiv"}>
          <div className={"top2"}>
            <div className={"middleDiv2"}>
              <div className={"center2"}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: 600,
                      color: "#251270",
                    }}
                  >
                    텍스트 이미지/비디오 변환
                  </span>
                  <span>Text to image / Video</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#464646",
                    }}
                  >
                    원하는 내용을 프롬프트에 작성하면 텍스트를 이미지나 비디오로
                    변환합니다. 상상만 하던 장면을 눈 앞에서 만나보세요.
                  </span>
                </div>
              </div>
              <div className={"circle2"}>
                <img src="./backImg/back4.png" alt="" />
              </div>
            </div>
          </div>
          <div className={"top2"}>
            <div className={"middleDiv2"}>
              <div className={"center2"}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: 600,
                      color: "#251270",
                    }}
                  >
                    이미지와비디오 스타일 변경
                  </span>
                  <span>Restyle image / Video</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#464646",
                    }}
                  >
                    원하는 스타일을 프롬프트에 작성하면 이미지나 비디오를 새로운
                    스타일로 변환합니다. 콘텐츠에 매력적인 변화를 만들어보세요.
                  </span>
                </div>
              </div>
              <div className={"circle3"}>
                <img src="./backImg/back5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
