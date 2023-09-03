'use client'
import React from 'react';
import {FcDocument, FcVoicePresentation} from 'react-icons/fc'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Link from 'next/link';


export default function Parliament() {

  const [gukhimarticle,setGukhimarticle] = useState([]);
  const [gukhimarticleLoading, setGukhimarticleLoading] = useState(true);

  const [minjuarticle,setMinjuarticle] = useState([]);
  const [minjuarticleLoading, setMinjuarticleLoading] = useState(true);


  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    const fetchData3 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getgukhimarticle?page=1`);
        setGukhimarticle(response.data);
        setGukhimarticleLoading(false);
        console.log("loading완료3")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchData4 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getminjuarticle?page=1`);
        setMinjuarticle(response.data);
        setMinjuarticleLoading(false);
        console.log("loading완료4")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData3(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData4(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  return (
    <>
      <div className="mx-auto flex-col lg:mx-0">
        <div className='flex items-center'>
            <FcVoicePresentation size='40'></FcVoicePresentation>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">국회/정당</h2>
        </div>
        <div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            여/야 주요 보도자료
            </p>
        </div>   
      </div>
      
      <div className="px-20 pt-10 grid gap-8 md:grid-cols-2">
        <div>
        <h1 className='mb-5 text-2xl font-bold text-center'>국민의힘</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">  
            <div>
              <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            제목
                        </th>
                        <th scope="col" className="px-6 py-3">
                            카테고리
                        </th>
                        <th scope="col" className="px-6 py-3">
                            작성일
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                      gukhimarticle.map((elem,index)=>{
                        return (
                        <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                          <th scope="row" className="inline-block w-[400px] truncate px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <a target='_blank' href={elem.url}>{elem['title']}</a>
                          </th>
                          <td className="w-1/4 px-6 py-4">
                              {elem['category']}
                          </td>
                          <td className="w-1/4 px-6 py-4">
                              {elem['regiDate']}
                          </td>
                      </tr>
                        )
                      })
                    }

                    
                </tbody>
              </table>
              <div className='text-right my-3 pr-5'>
                <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='https://www.peoplepowerparty.kr/news/comment/BBSDD0001'>Read more</Link></p>
              </div>  
            </div>
          </div>
        </div>
        <div>
        <h1 className='mb-5 text-2xl font-bold text-center'>더불어민주당</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
          
          <div>
            <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                      제목
                  </th>
                  <th scope="col" className="px-6 py-3">
                      카테고리
                  </th>
                  <th scope="col" className="px-6 py-3">
                      작성일
                  </th>
                </tr>
              </thead>
                <tbody>
                  {
                    minjuarticle.map((elem,index)=>{
                      return (
                      <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="inline-block w-[400px] truncate px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <a target='_blank' href={elem.url}>{elem['title']}</a>
                        </th>
                        <td className="w-1/4 px-6 py-4">
                            {elem['category']}
                        </td>
                        <td className="w-1/4 px-6 py-4">
                            {elem['regiDate']}
                        </td>
                    </tr>
                      )
                    })
                  }
                </tbody>
            </table>
          <div className='text-right my-3 pr-5'>
                <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='https://theminjoo.kr/main/sub/news/list.php?brd=11'>Read more</Link></p>
          </div>  
        </div>                 
      </div>
      </div>
    </div>

    
    </>
  )
}
