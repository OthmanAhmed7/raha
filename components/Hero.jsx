"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Hero = () => {
  console.log("Hero component rendered");
  return (
    <section>
      <div className="relative">
        <Swiper navigation modules={[Navigation]}>
          <div className="relative">
            <SwiperSlide>
              <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black/60 z-30"></div>
              <Image
                src="/img/slider-1.jpg"
                height={2000}
                width={2000}
                alt="slider image"
                className="h-[100vh] w-[100%] bg-cover object-cover"
              />
              <div className="absolute top-[40%] left-[30%] z-50 text-center">
                <h1 className="text-white text-[4.5rem] font-[600]">
                  Welcome to Raha
                </h1>
                <p className="text-white font-[500] tracking-[.08rem] uppercase">
                  Hotel and Resort
                </p>
              </div>
            </SwiperSlide>
          </div>

          <div className="relative">
            <SwiperSlide>
              <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black/60 z-30"></div>

              <Image
                src="/img/slider-2.jpeg"
                height={1068}
                width={1900}
                alt="slider image"
                className="h-[100vh] w-[100%] bg-cover"
              />

              <div className="absolute top-[40%] left-[30%] z-50 text-center">
                <h1 className="text-white text-[4.5rem] font-[600]">
                  unique experience
                </h1>
                <p className="text-white font-[500] tracking-[.08rem] uppercase">
                  enjoy with us
                </p>
              </div>
            </SwiperSlide>
          </div>

          <div className="relative">
            <SwiperSlide>
              <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black/60 z-30"></div>

              <Image
                src="/img/slider-3.jpg"
                height={1068}
                width={1900}
                alt="slider image"
                className="h-[100vh] w-[100%] bg-cover"
              />
              <div className="absolute top-[40%] left-[35%] z-50 text-center">
                <h1 className="text-white text-[4.5rem] font-[600]">
                  relaxing room
                </h1>
                <p className="text-white font-[500] tracking-[.08rem] uppercase">
                  your room your stay
                </p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
