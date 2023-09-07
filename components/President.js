'use client'
import React from 'react';
import {FcVoicePresentation} from 'react-icons/fc'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Link from 'next/link';
import PresidentSlider from './Slider';
export default function President() {

  const [presidentRealmeter,setPresidentRealmeter] = useState([]);
  const [presidentRealmeterLoading, setPresidentRealmeterLoading] = useState(true);

  const [presidentNBS,setPresidentNBS] = useState([]);
  const [presidentNBSLoading, setPresidentNBSLoading] = useState(true);

  const [presidentbrief,setPresidentbrief] = useState([]);
  const [presidentbriefLoading, setPresidentbriefLoading] = useState(true);

  const [presidentpress,setPresidentpress] = useState([]);
  const [presidentpressLoading, setPresidentpressLoading] = useState(true);

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    const fetchData1 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getPresidentRealmeter?page=1`);
        setPresidentRealmeter(response.data);
        setPresidentRealmeterLoading(false);
        console.log("loading완료1")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getPresidentNBS?page=1`);
        setPresidentNBS(response.data);
        setPresidentNBSLoading(false);
        console.log("loading완료2")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchData3 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentbrief?page=1`);
        setPresidentbrief(response.data);
        setPresidentbriefLoading(false);
        console.log("loading완료3")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchData4 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentpress?page=1`);
        setPresidentpress(response.data);
        setPresidentpressLoading(false);
        console.log("loading완료4")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData1(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData2(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData3(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData4(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);


  return (
    <>
      <div className="mx-auto flex-col lg:mx-0">
        <div className='flex items-center'>
            <FcVoicePresentation size='40'></FcVoicePresentation>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">국민/대통령</h2>
        </div>
        <div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            행정부처 관련 자료
            </p>
        </div>   
      </div>

    <section className="bg-white dark:bg-gray-900 ">
        <div className="px-4 mx-auto max-w-screen-2xl ">

            <div className='border-t mt-6 pt-8'>
            <div>
              <h1 className=' text-2xl my-5 font-bold text-center'>리얼미터</h1>
              <PresidentSlider></PresidentSlider>
            </div>
            
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 ">                
              <div>
                <h1 className='pt-5 text-2xl my-5 font-bold text-center'>대통령 브리핑</h1>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <div>
                  <table className="table-auto w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" className="px-6 py-3">
                                  제목
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  작성일
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                            presidentbrief.map((elem,index)=>{
                              return (
                              <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <td className="px-6 py-4">
                                  <div className="truncate w-[300px] font-bold text-black">
                                  <a target='_blank' href={elem.url}>{elem['title']}</a>
                                  </div>
                                  <div className="truncate w-[400px]">{elem['contents']}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="truncate">{elem['regiDate']}</div>
                                </td>
                              </tr>
                              )
                            })
                          }

                          
                      </tbody>
                  </table>

                </div>
                </div>
                  <div className='text-right my-2 pr-5'>
                    <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='https://www.president.go.kr/newsroom/briefing'>Read more</Link></p>
                </div>  
              </div>


              <div>
                <h1 className='pt-5 text-2xl my-5 font-bold text-center'>NBS</h1>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <div>
                  <table className="table-auto w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" className="px-6 py-3">
                                  제목
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  작성일
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                            presidentNBS.map((elem,index)=>{
                              return (
                              
                              <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <td className="px-6 py-4">
                                  <div className="truncate w-[300px] font-bold text-black">
                                  <a target='_blank' href={elem.url}>{elem['title']}</a>
                                  </div>
                                  <div className="truncate w-[400px]">{elem['contents']}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="truncate">{elem['regiDate']}</div>
                                </td>
                            </tr>
                              )
                            })
                          }

                          
                      </tbody>
                  </table>

                </div>
                </div>
                  <div className='text-right my-2 pr-5'>
                    <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='http://nbsurvey.kr/'>Read more</Link></p>
                </div>  
              </div>              
            </div>
            </div>
              
            
        </div>
      </section>
    </>
  )
}
