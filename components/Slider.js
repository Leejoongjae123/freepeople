'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Slider() {
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
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  
      
    return (
      <Carousel 
        responsive={responsive}
        autoPlay={true}
        partialVisible={false}
        dotListclassName="custom-dot-list-style"
      >
        {presidentRealmeter.map((elem, index) => {
          return (

            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="grid grid-rows-7 flex-col mx-auto justify-center">
                <div className="flex mx-auto">
                  <img className="" src={elem.imageSrc} alt="" />
                </div>
                
                <div className="text-center row-span-1 text-black font-bold">{elem.title}</div>
                <div className="text-center row-span-1 text-gray-600">{elem.regiDate}</div>
              </div>
            </div>
          );
        })}
      </Carousel>
    
  )
}