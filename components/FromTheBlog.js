'use client'
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'


export default function FromTheBlog(){



    let futurePostings=[
      {
        title:"한국 정치 이대로 괜찮은가?",
        regiDate:"2023-08-27",
        contents:'현재 문제가 매우 많습니다.'
      },
      {
        title:"중국 정치 이대로 괜찮은가?",
        regiDate:"2023-08-27",
        contents:'현재 문제가 매우 많습니다.'
      },
      {
        title:"미국 정치 이대로 괜찮은가?",
        regiDate:"2023-08-27",
        contents:'현재 문제가 매우 많습니다.'
      },
      {
        title:"일본 정치 이대로 괜찮은가?",
        regiDate:"2023-08-27",
        contents:'현재 문제가 매우 많습니다.'
      },
      {
        title:"영국 정치 이대로 괜찮은가?",
        regiDate:"2023-08-27",
        contents:'현재 문제가 매우 많습니다.'
      }
    ]

    let columnPostings=[
      {
        title:"한국 의회 이대로 괜찮은가?",
        regiDate:"2023-08-27",
        contents:'이제는 전부 개선해야 합니다.'
      },
      {
        title:"중국 의회 이대로 괜찮은가?",
        regiDate:"2023-08-27",
        contents:'이제는 전부 개선해야 합니다.'
      },
      {
        title:"미국 의회 이대로 괜찮은가?",
        regiDate:"2023-08-27",
        contents:'이제는 전부 개선해야 합니다.'
      },
      {
        title:"일본 의회 이대로 괜찮은가?",
        regiDate:"2023-08-27",
        contents:'이제는 전부 개선해야 합니다.'
      },
      {
        title:"영국 의회 이대로 괜찮은가?",
        regiDate:"2023-08-27",
        contents:'이제는 전부 개선해야 합니다.'
      }
    ]
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      // 데이터를 가져오는 함수를 정의합니다.
      const fetchData = async () => {
        try {
          const response = await axios.get('https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getBigKinds?page=1');
          setData(response.data[0]);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // 함수를 호출하여 데이터를 가져옵니다.
    }, []);
    

    return(
      <div className="w-full bg-gray-100 py-10">
      <div className="mx-auto px-6 lg:px-8 sm:py-2" >
        {/* 헤더부분 */}
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">컬럼/연구</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            각종 컬럼 및 연구자료
          </p>
        </div>

        
        
        <div className="mx-auto grid grid-cols-1 gap-x-8 border-t border-gray-200 pt-6 sm:mt-6 sm:pt-6 sm:grid-cols-1 lg:mx-0 lg:grid-cols-3">
            {/* 첫번째 섹션 */}
            <div className='bg-white border border-gray-200 rounded-lg shadow'>
            {
              loading?(
                  <Spinner></Spinner>
              ):(
                <>
                <div>
                  <img className="overflow-hidden rounded-t-lg" src={data.imageUrl} alt="" />
                    <div className="p-5">
                      <a href="#">
                          <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                      </a>
                      <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">{data.contents}</p>
                      <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">{data.regiDate}</p>
                    </div>
                </div> 
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://shop-phinf.pstatic.net/20221220_60/1671512155404m34vw_JPEG/72647989066429637_1719202779.jpg?type=m510" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                </>
              )
            }
            <div className='flex justify-center my-3'>
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
              </ul>
              </div>
            </div>
            
          
            <div className='flex flex-col bg-white border border-gray-200 rounded-lg shadow justify-center'>
              <div className='flex flex-col'>
                <ul className="grid h-full justify-start ml-10 grid-rows-5 gap-4 items-center">
                  {futurePostings.map((elem,index)=>(
                      <li key={index*111} className="pb-3 mx-auto sm:pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {elem.regiDate}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {elem.title}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {elem.contents}
                            </p>
                        </div>
                      </div>
                    </li>   
                  ))       
                  }
                </ul>
                <div className='flex justify-center my-3'>
                  <ul className="inline-flex -space-x-px text-sm">
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                      <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                  </ul>
                </div>
              </div>                    
            </div>

            {/* 세번째 섹션 */}
            <div className='flex flex-col bg-white border border-gray-200 rounded-lg shadow justify-center'>
              <div className='flex flex-col'>
                <ul className="grid h-full justify-start ml-10 grid-rows-5 gap-4 items-center">
                  {futurePostings.map((elem,index)=>(
                      <li key={index*111} className="pb-3 mx-auto sm:pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {elem.regiDate}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {elem.title}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {elem.contents}
                            </p>
                        </div>
                      </div>
                    </li>   
                  ))       
                  }
                </ul>
                <div className='flex justify-center my-3'>
                  <ul className="inline-flex -space-x-px text-sm">
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                      <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                  </ul>
                </div>
              </div>                    
            </div>

        </div>
      </div>
    </div>
    )
  }