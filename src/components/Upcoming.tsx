import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import nextImg from "@i/next_img.png";
import upcomingImg from "@i/bg.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Upcoming() {
  const line = useRef<HTMLDivElement  | null>(null);
  const onAutoplayTimeLeft = (s:any, time:any, progress:any) => {
    if (line.current) {
      line.current.style.setProperty('--progress', String(1 - progress));
    }
  };
  return (
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper upcoming"
      >
        <SwiperSlide className="upcoming__slide">
        <img src={upcomingImg} alt="" className="upcoming__slide-img"/>
                <h2 className="upcoming__slide-title">Мир Юрского периода: Господство</h2>
                <p className="upcoming__slide-text">После уничтожения острова Нублар динозавры вырвались на свободу и стали полноправными обитателями планеты. Людям удается поддерживать хрупкое равновесие, определяющее мирное сосуществование на Земле. Но как долго человек сможет сохранять...</p>
                <button className="upcoming__slide-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_13327_29)">
                            <path
                                d="M17.5 21.25H5V23.75H17.5V21.25ZM25 11.25H5V13.75H25V11.25ZM5 18.75H25V16.25H5V18.75ZM5 6.25V8.75H25V6.25H5Z"
                                fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_13327_29">
                                <rect width="30" height="30" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    Подробнее
                </button>
        </SwiperSlide>
        <div className="autoplay-progress upcoming__progress" slot="container-end">
        <p className="upcoming__progress-text">Следующий</p>
                    <h3 className="upcoming__progress-title">Tor</h3>
                    <img src={nextImg} alt="" className="upcoming__progress-img"/>
                    <div className="line" ref={line}></div>
        </div>
      </Swiper>
  );
}