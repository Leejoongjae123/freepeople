'use client';
import React from 'react';
import {FcBullish,FcVoicePresentation,FcCurrencyExchange,FcAreaChart,FcMoneyTransfer} from 'react-icons/fc'
import {GiBarrel} from 'react-icons/gi'
import {AiFillGolden} from 'react-icons/ai'
import {FaPercent} from 'react-icons/fa'
import {mdOilBarrel} from 'react-icons/md'
import { useState,useEffect } from 'react';
import Spinner from './Spinner';
import Link from 'next/link';
import PresidentSlider from './Slider';
import axios from 'axios';

export default function President() {

  const [presidentRealmeter,setPresidentRealmeter] = useState([]);
  const [presidentRealmeterLoading, setPresidentRealmeterLoading] = useState(true);

  const [presidentNBS,setPresidentNBS] = useState([]);
  const [presidentNBSLoading, setPresidentNBSLoading] = useState(true);

  const [presidentbrief,setPresidentbrief] = useState([]);
  const [presidentbriefLoading, setPresidentbriefLoading] = useState(true);

  const [presidentpress,setPresidentpress] = useState([]);
  const [presidentpressLoading, setPresidentpressLoading] = useState(true);
  
  const [economyIndicators,setEconomyIndicators] = useState([]);
  const [economyIndicatorsLoading, setEconomyIndicatorsLoading] = useState(true);

  const fetchData1 = async () => {
    try {
      const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentbrief?page=1`);
      
      setPresidentbrief(response.data);
      setPresidentbriefLoading(false);
      console.log("loading완료1")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await fetch(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getPresidentNBS?page=1`);
      const jsonData=await response.json();
      setPresidentNBS(jsonData);
      setPresidentNBSLoading(false);
      console.log("loading완료2")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // const fetchData3 = async () => {
  //   try {
  //     const response = await fetch(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentbrief?page=1`);
  //     const jsonData= await response.json()
  //     setPresidentbrief(jsonData);
  //     setPresidentbriefLoading(false);
  //     console.log("loading완료3")
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // const fetchData4 = async () => {
  //   try {
  //     const response = await fetch(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentpress?page=1`);
  //     const jsonData=await response.json()
  //     setPresidentpress(jsonData);
  //     setPresidentpressLoading(false);
  //     console.log("loading완료4")
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // const fetchData5 = async () => {
  //   try {
  //     const response = await fetch(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getEconomyStatus`);
  //     const jsonData=await response.json()
  //     setEconomyIndicators(jsonData);
  //     setEconomyIndicatorsLoading(false);
  //     console.log("loading완료5")
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // const fetchData1 = async () => {
  //   try {
  //     const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentbrief?page=1`);
  //     setPresidentbrief(response.data);
  //     setPresidentbriefLoading(false);
  //     console.log("loading완료3")
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };


  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    
    fetchData1(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData2(); // 함수를 호출하여 데이터를 가져옵니다.
    // fetchData3(); // 함수를 호출하여 데이터를 가져옵니다.
    // fetchData4(); // 함수를 호출하여 데이터를 가져옵니다.
    // fetchData5(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);




  return (
    <>
      <div className="items-center mx-auto  lg:mx-0">
        <div className='flex items-center'>
            <FcVoicePresentation size='40'></FcVoicePresentation>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">국민/대통령</h2>
        </div>
        <div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            행정부처 관련 자료
            </p>
        </div>   
      </div>

      <section className="bg-white">
        <div className="mx-auto ">

            <div className='border-t mt-6 pt-8'>
            <div>
              <h1 className=' text-2xl my-5 font-bold text-center'>리얼미터</h1>
              <PresidentSlider></PresidentSlider>
            </div>
            </div>
        </div>
      
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 ">
          <div className='truncate'>
            <h1 className='text-2xl font-bold text-center'>대통령 브리핑</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>

            <div>
              <table className="table-fixed w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="w-3/4 px-6 py-3 text-center">
                        제목
                    </th>
                    <th scope="col" className="w-1/4px-6 py-3 text-center">
                        게시일
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    presidentbrief.map((elem,index)=>{
                      return(
                        <tr className=" bg-white border-b ">
                          <th scope="row" className="grid-cols-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              <p className='font-bold truncate ...'><a href={elem.url}>{elem.title}</a></p>
                              <p className='text-gray-500 truncate ...'>{elem.contents}</p>
                          </th>
                          <td className="grid-col truncate px-6 py-4 text-center">
                              {elem.regiDate}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
          
          
          <div className='truncate'>
            <h1 className='text-2xl font-bold text-center'>NBS</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>

            <div>
              <table className="table-fixed w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="w-3/4 px-6 py-3 text-center">
                        제목
                    </th>
                    <th scope="col" className="w-1/4px-6 py-3 text-center">
                        게시일
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    presidentNBS.map((elem,index)=>{
                      return(
                        <tr className=" bg-white border-b ">
                          <th scope="row" className="grid-cols-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                              <p className='font-bold truncate ...'><a href={elem.url}>{elem.title}</a></p>
                              <p className='text-gray-500 truncate ...'>{elem.contents}</p>
                          </th>
                          <td className="grid-col truncate px-6 py-4 text-center">
                              {elem.regiDate}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>                 
        
        </div>

      </section>
    </>

    

  )
}

