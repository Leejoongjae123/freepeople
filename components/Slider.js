'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import Image from "next/image";


export default function PresidentSlider() {
  const [presidentRealmeter,setPresidentRealmeter] = useState([]);
  const [presidentRealmeterLoading, setPresidentRealmeterLoading] = useState(true);

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    const fetchData1 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getPresidentRealmeter?page=1`);
        setPresidentRealmeter(response.data);
        setPresidentRealmeterLoading(false);
        console.log("loading리얼미터")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData1(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  console.log('presidentRealmeter:',presidentRealmeter)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

      
    return (
      <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        partialVisible={false}
      >
        {presidentRealmeter.map((elem, index) => {
          return (
            <div className="flex flex-col slider" key={index}>
              <img className=""src={elem.imageSrc} alt="movie" />
              <p className="font-bold text-base">
                {elem.title}
              </p>
              <p className="text-right text-gray-500">
                {elem.regiDate}
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>

    
  )
}