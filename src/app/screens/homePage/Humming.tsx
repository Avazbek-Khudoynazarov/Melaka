import React from "react";

const divStyle = {
  backgroundImage: 'url("/music/1.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "90%",
  backgroundPositionY: "90%",
};
const bass = {
  backgroundImage: 'url("/music/2.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "90%",
  backgroundPositionY: "90%",
};
const guitar = {
  backgroundImage: 'url("/music/3.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "90%",
  backgroundPositionY: "90%",
};
const piano = {
  backgroundImage: 'url("/music/4.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "90%",
  backgroundPositionY: "90%",
};

const drum = {
  backgroundImage: 'url("/music/5.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "80%",
  backgroundPositionY: "90%",
};
export default function HummingBlocks() {
  return (
    <div className={"configHom"}>
      <img
        style={{
          position: "absolute",
          aspectRatio: "1 / 1",
          bottom: 0,
          width: "100%",
          height: "250px",
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
              style={{
                width: "190px",
                height: "170px",
                background: "linear-gradient(to bottom, #FFFFFF, #FFDF69)",
              }}
            ></div>
            <div
              className={"block"}
              style={{ background: "rgba(226, 194, 77, 1)" }}
            >
              <div className={"sound"} style={divStyle}>
                <div className={"titDiv"}>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#D97635",
                    }}
                  >
                    부우
                  </span>
                  <span
                    style={{
                      fontSize: "19px",
                      fontWeight: 800,
                      color: "#D97635",
                    }}
                  >
                    브라스(Brass)
                  </span>
                </div>
                <button>
                  <img src="./Icons/sound.png" alt="" />
                </button>
              </div>
              <div
                style={{
                  width: "170px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  세 개의 피스톤을 운지하여 연주하는 나팔형태의 금관악지{" "}
                </span>
              </div>
            </div>
          </div>
          <div className={"mainBlock"}>
            <img style={{ zIndex: 100 }} src="./Icons/emoticon2.png" alt="" />
            <img
              style={{ width: "203px", height: "66px", top: "32%" }}
              src="./Icons/circle2.png"
              alt=""
            />
            <div
              style={{
                width: "190px",
                height: "170px",
                background: "linear-gradient(to bottom, #FFFFFF, #1F359F)",
              }}
            ></div>
            <div
              className={"block"}
              style={{ background: "rgba(77, 100, 203, 1)" }}
            >
              <div className={"sound"} style={bass}>
                <div className={"titDiv"}>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#1F359F",
                    }}
                  >
                    벤
                  </span>
                  <span
                    style={{
                      fontSize: "19px",
                      fontWeight: 800,
                      color: "#1F359F",
                    }}
                  >
                    베이스(Bass)
                  </span>
                </div>
                <button style={{ right: "16px", top: "10px" }}>
                  <img src="./Icons/sound.png" alt="" />
                </button>
              </div>
              <div
                style={{
                  width: "170px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  헤드의 한쪽 4새의 줄감개와, 뾰족한 전자기타 현악기
                </span>
              </div>
            </div>
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
              style={{
                width: "190px",
                height: "170px",
                background: "linear-gradient(to bottom, #FFFFFF, #6F5944)",
              }}
            ></div>
            <div
              className={"block"}
              style={{ background: "rgba(187, 157, 128, 1)" }}
            >
              <div className={"sound"} style={guitar}>
                <div className={"titDiv"}>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#6F5944",
                    }}
                  >
                    타타
                  </span>
                  <span
                    style={{
                      fontSize: "19px",
                      fontWeight: 800,
                      color: "#6F5944",
                    }}
                  >
                    기타(Guitar)
                  </span>
                </div>
                <button style={{ right: "16px", top: "10px" }}>
                  <img src="./Icons/sound.png" alt="" />
                </button>
              </div>
              <div
                style={{
                  width: "170px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  헤드의 양쪽 6개의 줄감개와, 둥근 바디의 현악기
                </span>
              </div>
            </div>
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
              style={{
                width: "190px",
                height: "170px",
                background: "linear-gradient(to bottom, #FFFFFF, #55585A)",
              }}
            ></div>
            <div
              className={"block"}
              style={{ background: "rgba(85, 88, 90, 1)" }}
            >
              <div className={"sound"} style={piano}>
                <div className={"titDiv"}>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "##000000",
                    }}
                  >
                    멜로
                  </span>
                  <span
                    style={{
                      fontSize: "19px",
                      fontWeight: 800,
                      color: "##000000",
                    }}
                  >
                    피아노(Piano)
                  </span>
                </div>
                <button style={{ right: "14px", top: "7px" }}>
                  <img src="./Icons/sound2.png" alt="" />
                </button>
              </div>
              <div
                style={{
                  width: "170px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  흰 건반과 검은 건반이 배치된 키보드 타악기
                </span>
              </div>
            </div>
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
              style={{
                width: "200px",
                height: "190px",
                background: "linear-gradient(to bottom, #FFFFFF, #AB343D)",
              }}
            ></div>
            <div
              className={"block"}
              style={{ background: "rgba(213, 102, 114, 1)" }}
            >
              <div className={"sound"} style={drum}>
                <div className={"titDiv"}>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#AB343D",
                    }}
                  >
                    럼블
                  </span>
                  <span
                    style={{
                      fontSize: "19px",
                      fontWeight: 800,
                      color: "#AB343D",
                    }}
                  >
                    드럼(Drum)
                  </span>
                </div>
                <button style={{ right: "1px", top: "7px" }}>
                  <img src="./Icons/sound.png" alt="" />
                </button>
              </div>
              <div
                style={{
                  width: "170px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  둥근 원통을 스틱으로 두드리는 리듬 타악기
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
