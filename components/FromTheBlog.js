'use client'
import React from 'react'
import Link from 'next/link'

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

        
        <div className="mx-auto grid grid-cols-1 gap-x-8 border-t border-gray-200 pt-6 sm:mt-6 sm:pt-6 lg:mx-0 lg:grid-cols-3">
            {/* 첫번째 섹션 */}
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img class="overflow-hidden rounded-t-lg" src="https://mblogthumb-phinf.pstatic.net/MjAxOTExMjdfOTIg/MDAxNTc0ODM0MDgyODI3.oNvDljd5-6bWjkYvMVxvjSKYbkMCqUDfsiu2vdYTv5Ig.mjMQXGeU2ng1pn6KgXWZoa9y93isVRvt4pOxZKW48QQg.PNG.okdolsu777/15748340244248636.png?type=w800" alt="" />
                <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">빅카인즈 8월 4주차</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">생크림,편의점,손거울,픽사,목걸이</p>
                </div>
            </div>
            {/* 두번째 섹션 */}
            <div className='bg-white border border-gray-200 rounded-lg shadow'>
              <ul class="grid h-full justify-center grid-rows-5 gap-4 items-center">
                {futurePostings.map((elem,index)=>(
                    <li class="pb-3 mx-auto sm:pb-4">
                    <div class="flex items-center space-x-4">
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {elem.regiDate}
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {elem.title}
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {elem.contents}
                          </p>
                      </div>
                    </div>
                  </li>   
                ))       
                }
              </ul>        
              <div className='flex justify-center my-3'>
              <ul class="inline-flex -space-x-px text-sm">
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
              </ul>
              </div>
            </div>
            <div className='bg-white border border-gray-200 rounded-lg shadow'>
              <ul class="grid h-full justify-center grid-rows-5 gap-4 items-center">
                {columnPostings.map((elem,index)=>(
                    <li class="pb-3 mx-auto sm:pb-4">
                    <div class="flex items-center space-x-4">
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {elem.regiDate}
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {elem.title}
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {elem.contents}
                          </p>
                      </div>
                    </div>
                  </li>   
                ))       
                }
              </ul>        
              <div className='flex justify-center my-3'>
              <ul class="inline-flex -space-x-px text-sm">
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
              </ul>
              </div>
            </div>

        </div>
      </div>
    </div>
    )
  }