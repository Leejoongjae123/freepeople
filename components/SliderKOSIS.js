'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import Image from "next/image";
import { FcUp,FcDown } from "react-icons/fc";


export default function SliderKOSIS() {
  const [KOSIS,setKOSIS] = useState([]);
  const [KOSISLoading, setKOSISLoading] = useState(true);

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    const fetchData1 = async () => {
      
      
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getKOSIS?page=1`);
        setKOSIS(response.data);
        setKOSISLoading(false);
        console.log("loadingKOSIS")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData1(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

      
    return (
      <div className="parent">
        <h2 className="text-2xl leading-tight font-bold">
          통계청 주요 지표
        </h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        partialVisible={false}
      >
        {KOSIS.map((elem, index) => {
          return (
            <div className="flex flex-col slider" key={index}>
              <div className="relative">
                <img src={elem.imageSrc} alt="이미지 설명" className="w-full h-auto" />

                <div className="flex absolute top-0 left-0 text-white p-2 text-xs">
                
                  <span id="badge-dismiss-default" className="truncate ... text-xs font-bold text-gray-800">
                    {elem.category}  
                  </span>
                
                  <span className="truncate ... text-gray-500">
                    (단위:{elem.unit})
                  </span>
                
                  

                </div>
              </div>
              <div className="flex flex-col text-center">
                <p className="font-bold text-sm truncate ...">
                  {elem.title}
                </p>
                <div className="flex justify-evenly items-center">
                  <p className="text-base font-bold text-cyan-600 text-gray-500">
                    {elem.value}
                  </p>
                  <p className="text-xs text-gray-500">
                    ({elem.year}기준)
                  </p>
                </div>
                <div className="flex mx-auto">
                <p className="text-xs text-gray-500">
                  {elem.prev}
                </p>

                
                {elem.updown==="up"?(
                  
                  <p><FcUp size={20} className="text-red-500"></FcUp></p>
                ):(
                  <p><FcDown size={20} className="text-red-500"></FcDown></p>
                )}
                  
                </div>
                

              </div>
              
            </div>
          );
        })}
      </Carousel>
    </div>

    
  )
}