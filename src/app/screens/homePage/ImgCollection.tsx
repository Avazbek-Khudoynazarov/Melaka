import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

type Image = {
  id: number;
  src: string;
  alt: string;
};

// Define image groups
const imageGroups: Image[][] = [
  [
    { id: 1, src: "/1/1.jpg", alt: "Image 1" },
    { id: 2, src: "/1/2.jpg", alt: "Image 2" },
    { id: 3, src: "/1/3.jpg", alt: "Image 3" },
    { id: 4, src: "/1/4.jpg", alt: "Image 4" },
    { id: 5, src: "/1/5.jpg", alt: "Image 5" },
    { id: 6, src: "/1/6.jpg", alt: "Image 6" },
  ],
  [
    { id: 1, src: "/2/1.jpg", alt: "Image 1" },
    { id: 2, src: "/2/2.jpg", alt: "Image 2" },
    { id: 3, src: "/2/3.jpg", alt: "Image 3" },
    { id: 4, src: "/2/4.jpg", alt: "Image 4" },
    { id: 5, src: "/2/5.jpg", alt: "Image 5" },
    { id: 6, src: "/2/6.jpg", alt: "Image 6" },
  ],
  [
    { id: 1, src: "/3/1.jpg", alt: "Image 1" },
    { id: 2, src: "/3/2.jpg", alt: "Image 2" },
    { id: 3, src: "/3/3.jpg", alt: "Image 3" },
    { id: 4, src: "/3/4.jpg", alt: "Image 4" },
    { id: 5, src: "/3/5.jpg", alt: "Image 5" },
    { id: 6, src: "/3/6.jpg", alt: "Image 6" },
  ],
  [
    { id: 2, src: "/4/2.jpg", alt: "Image 2" },
    { id: 3, src: "/4/3.jpg", alt: "Image 3" },
    { id: 4, src: "/4/4.jpg", alt: "Image 4" },
    { id: 5, src: "/4/5.jpg", alt: "Image 5" },
    { id: 6, src: "/4/6.jpg", alt: "Image 6" },
    { id: 1, src: "/4/1.jpg", alt: "Image 1" },
  ],
  [
    { id: 1, src: "/5/1.jpg", alt: "Image 1" },
    { id: 2, src: "/5/2.jpg", alt: "Image 2" },
    { id: 3, src: "/5/3.jpg", alt: "Image 3" },
    { id: 4, src: "/5/4.jpg", alt: "Image 4" },
    { id: 5, src: "/5/5.jpg", alt: "Image 5" },
    { id: 6, src: "/5/6.jpg", alt: "Image 6" },
  ],
  [
    { id: 1, src: "/6/1.jpg", alt: "Image 1" },
    { id: 2, src: "/6/2.jpg", alt: "Image 2" },
    { id: 3, src: "/6/3.jpg", alt: "Image 3" },
    { id: 4, src: "/6/4.jpg", alt: "Image 4" },
    { id: 5, src: "/6/5.jpg", alt: "Image 5" },
    { id: 6, src: "/6/6.jpg", alt: "Image 6" },
  ],
  [
    { id: 1, src: "/7/1.jpg", alt: "Image 1" },
    { id: 2, src: "/7/2.jpg", alt: "Image 2" },
    { id: 3, src: "/7/3.jpg", alt: "Image 3" },
    { id: 4, src: "/7/4.jpg", alt: "Image 4" },
    { id: 5, src: "/7/5.jpg", alt: "Image 5" },
    { id: 6, src: "/7/6.jpg", alt: "Image 6" },
  ],
];

const span = [
  "뉴테크 MZ 새싹 캠프",
  "대구 SW 미래채움교육",
  "경일대  AI 모션 스토리텔러 챌린지",
  "2024 경상북도 국제 AI•메타버스 영화제",
  "글로벌 드림캠프",
  "청소년 앙트-UP 드림 스쿨",
  "영남일보와 함께하는 ‘영상일기 제작 AI 모션 드로잉 챌린지’",
];

export default function ImageCollection() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeGroup, setActiveGroup] = useState(0);
  const [mainImage, setMainImage] = useState(imageGroups[0][0]);

  useEffect(() => {
    if (mainSwiper) {
      mainSwiper.slideTo(0);
    }
  }, [mainSwiper, activeGroup]);

  const handlePrev = () => {
    const newGroup =
      activeGroup === 0 ? imageGroups.length - 1 : activeGroup - 1;
    setActiveGroup(newGroup);
    setMainImage(imageGroups[newGroup][0]);
    if (mainSwiper) {
      mainSwiper.slideTo(0);
    }
  };

  const handleNext = () => {
    const newGroup =
      activeGroup === imageGroups.length - 1 ? 0 : activeGroup + 1;
    setActiveGroup(newGroup);
    setMainImage(imageGroups[newGroup][0]);
    if (mainSwiper) {
      mainSwiper.slideTo(0);
    }
  };

  const handleThumbnailClick = (image: Image) => {
    setMainImage(image);
    if (mainSwiper) {
      const imageIndex = imageGroups[activeGroup].indexOf(image);
      mainSwiper.slideTo(imageIndex);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.activeIndex;
    setMainImage(imageGroups[activeGroup][newIndex]);
  };

  return (
    <div className="collec-config">
      <div className="tit-swipe">
        <span style={{ fontSize: "45px", fontWeight: 700, color: "#1174ED" }}>
          다채로운 프로그램 활동과 참여
        </span>
        <span style={{ fontSize: "45px", fontWeight: 700, color: "#1174ED" }}>
          교육 및 공모전 사진
        </span>
        <button
          style={{
            width: "570px",
            height: "50px",
            borderRadius: "30px",
            border: "none",
            background: "#1174ED",
            fontSize: "20px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginTop: "30px",
          }}
        >
          {span[activeGroup]}
        </button>
        <div style={{ display: "flex", gap: "10px" }}>
          {Array.from({ length: imageGroups.length }, (_, i) => (
            <div
              key={i}
              className="pagdot"
              style={{
                background: activeGroup === i ? "#1174ED" : "#a4a4a4",
              }}
            ></div>
          ))}
        </div>
        <div className="al-config">
          <button onClick={handlePrev}>
            <img src="./Icons/left.png" alt="Previous" />
          </button>
          <div className="mainswipe">
            <Swiper
              onSwiper={setMainSwiper}
              style={
                {
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                } as React.CSSProperties
              }
              loop={false}
              spaceBetween={10}
              navigation={true}
              onSlideChange={(swiper: SwiperType) => handleSlideChange(swiper)}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {imageGroups[activeGroup].map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={false}
              spaceBetween={10}
              slidesPerView={6}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {imageGroups[activeGroup].map((image) => (
                <SwiperSlide
                  key={image.id}
                  onClick={() => handleThumbnailClick(image)}
                >
                  <img
                    style={{
                      width: "150px",
                      height: "90px",
                      cursor: "pointer",
                    }}
                    src={image.src}
                    alt={image.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button onClick={handleNext}>
            <img src="./Icons/right.png" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}
