import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

export function NavbarHome() {
  //   const [showLinks, setShowLinks] = useState(true);
  //   const [lastScrollY, setLastScrollY] = useState(0);

  //   const controlNavbar = () => {
  //     if (window.scrollY > lastScrollY) {
  //       setShowLinks(false);
  //     } else {
  //       setShowLinks(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", controlNavbar);

  //     return () => {
  //       window.removeEventListener("scroll", controlNavbar);
  //     };
  //   }, [lastScrollY]);

  return (
    <div id="home-navbar">
      <img
        style={{
          position: "absolute",
          width: "470px",
          height: "450px",
          right: "7%",
          bottom: "10%",
        }}
        src="./Icons/rebbit.png"
        alt=""
      />
      <img
        style={{
          position: "absolute",
          width: "650px",
          height: "351px",
          right: "1%",
          bottom: "50%",
        }}
        src="./Icons/star.png"
        alt=""
      />
      <div className={"head2"}>
        <div
          style={{
            width: "70%",
            display: "flex",
            alignItems: "center",
            gap: "50px",
            justifyContent: "end",
          }}
        >
          <img
            style={{ width: "260px", height: "50px" }}
            src="./Icons/mzLogo.png"
            alt=""
          />
          <img
            style={{ width: "290px", height: "25px" }}
            src="./Icons/mzLogo2.png"
            alt=""
          />
        </div>
        <div className="secBtn">
          <button>바로가기</button> <b>Click!</b>
        </div>
      </div>
      <div className={"conMain2"}>
        <div className={"conMain3"}>
          <motion.div
            className="config-navbar"
            // initial={{ opacity: 1, y: 0 }}
            // animate={{ opacity: showLinks ? 1 : 0, y: showLinks ? 0 : -50 }}
            // transition={{ duration: 0.3 }}
          >
            <div className="con-icon">
              <Link to="#home-navbar" smooth>
                <img src="./Icons/headLogo.png" alt="" />
              </Link>
            </div>
            <div className="con-link">
              <Link className="main-link" to="#home-navbar" smooth>
                프로그램
              </Link>
              <Link className="main-link" to="#section1">
                포트폴리오
              </Link>
              <Link className="main-link" to="#section1">
                작품 공유
              </Link>
              <Link className="main-link" to="#section1">
                문의하기
              </Link>
              <div className="btn">
                <button>로그인</button>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    margin: 0, // Adjust the margin to add space around the slash
                    color: "rgba(47, 150, 253, 1)",
                  }}
                >
                  /
                </span>
                <button>회원가입</button>
              </div>
            </div>
          </motion.div>
          <div className={"cenCon"}>
            <div className={"titCon"}>
              <img src="./Icons/titText.png" alt="" />
              <button>그래피툰 만들기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
