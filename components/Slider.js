'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";


export default function Slider() {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const sliderImageUrl = [
        //First image url
        {
          url:
            "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
        },
        {
          url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
        },
        //Second image url
        {
          url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
        },
        //Third image url
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
        },
      
        //Fourth image url
      
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
        }
      ];
  
    return (
    <div>
    <div className="parent px-20">
      <Carousel 
        responsive={responsive}
        autoPlay={true}
        partialVisible={false}
        dotListclassName="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="p-8 rounded-t-lg" src="https://kosis.kr/visual/files/common/20221222412000000.jpg" alt="product image" />
              <div className="px-5 pb-5">

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>        
    </div> 
  )
}