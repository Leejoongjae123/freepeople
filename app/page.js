'use client'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import SmallCarousel from '@/components/Slider'
import Slider from '@/components/Slider'
// import ApexCharts from "react-apexcharts";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import FromTheBlog from '@/components/FromTheBlog'
import JijidoReal from '@/components/JijidoReal'
import JijidoNBS from '@/components/JijidoNBS'
import {FcVoicePresentation} from 'react-icons/fc'
import { Element } from 'react-scroll' 
import LoginBtn from '@/components/LoginBtn'
import President from '@/components/President'
import Parliament from '@/components/Parliament'
import { FcDocument } from 'react-icons/fc'
import Policy from '@/components/Policy'

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ')
}

export default function Home() {

  return (
    <div>
    
    <Element name="0"></Element>
    <div className="bg-white py-6 sm:py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mt-20">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">정치/경제 종합 정보 제공</h2>
          <h1 className="mt-2 font-bold tracking-tight text-gray-900 lg:text-4xl sm:text-2xl">
            미 래 민 중
          </h1>
          <p className="mt-3 font-bold text-lg leading-8 text-gray-600">
            미래 민중은 민중의, 민중을 위한, 민중에 의한
          </p>
          
        </div>
      </div>
    </div>


   


    <Element name="1"></Element>
    <div id="mySection" className="mx-auto px-10 lg:px-20 pb-10 bg-gray-100">
      <FromTheBlog></FromTheBlog>
    </div>

    <Element name="2"></Element>
    <div className="bg-white px-20 py-10">
      <President></President>
    </div>
    
    <Element name="3"></Element>
    <div className="bg-gray-100 px-20 py-10">
      <Parliament></Parliament>
    </div>
    
    

    
    <Element name="4"></Element>
    <div className="bg-white-100 px-20 py-10">
      <Policy></Policy>
    </div>
    

    

    
        

          


    {/* <div className="grid mx-auto flex px-6 py-12 lg:grid-cols-3 sm:lg:grid-cols-1"> 
      <ApexCharts 
      type="bar" 
      series={[
        { name: "오늘의 기온", data: [19, 26, 20, 9], }, 
      { name: "내일의 기온", data: [30, 26, 34, 10], },
      ]} 
      options={{ chart : { height: 100, width: 100, }, }}> 
      </ApexCharts>
      <ApexCharts 
      type="line" 
      series={[
        { name: "오늘의 기온", data: [19, 26, 20, 9], }, 
      { name: "내일의 기온", data: [30, 26, 34, 10], },
      ]} 
      options={{ chart : { height: 100, width: 100, }, }}> 
      </ApexCharts>
      <ApexCharts 
      type="area" 
      series={[
        { name: "오늘의 기온", data: [19, 26, 20, 9], }, 
      { name: "내일의 기온", data: [30, 26, 34, 10], },
      ]} 
      options={{ chart : { height: 100, width: 100, }, }}> 
      </ApexCharts>
    </div> */}



    <div className='grid grid-cols-3 items-center'>
      <SearchCard></SearchCard>
      <SearchCard></SearchCard>
      
      <div class="px-3 md:lg:xl:px-3 py-3 bg-opacity-10">
        <h2 className='text-center text-3xl'>금융지표</h2>
            <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border">
                <div
                    class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    <span class="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg></span>
                    <p class="text-xl font-medium text-slate-700 mt-3">Most Experienced Team</p>
                </div>

                <div
                    class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    <span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><svg
                            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg></span>
                    <p class="text-xl font-medium text-slate-700 mt-3">Best
                        Test preparation</p>
                </div>

                <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    <span class="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg></span>
                    <p class="text-xl font-medium text-slate-700 mt-3">Admission process Guidance</p>
                </div>


                <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                    <span class="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"><svg
                            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg></span>
                    <p class="text-xl font-medium text-slate-700 mt-3">Best
                        Track Record</p>
                </div>

                <div class="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                    <span class="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200"><svg
                            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg></span>
                    <p class="text-xl font-medium text-slate-700 mt-3">Free
                        Mock Exams</p>
                </div>

                <div class="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
                    <span class="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
                            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg></span>
                    <p class="text-xl font-medium text-slate-700 mt-3">Genuine
                        Visa Advice</p>
                </div>

            </div>
        </div>
      </div>
    {/* 한국은행100대지표 */}
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h1 className='text-center text-3xl'>한국은행100대지표</h1>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                </th>
                <th scope="col" class="px-6 py-3">
                    지표명
                </th>
                <th scope="col" class="px-6 py-3">
                지표명
                </th>
                <th scope="col" class="px-6 py-3">
                지표명
                </th>
                <th scope="col" class="px-6 py-3">
                지표명
                </th>
                <th scope="col" class="px-6 py-3">
                지표명
                </th>
                <th scope="col" class="px-6 py-3">
                지표명
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Watches
                </td>
                <td class="px-6 py-4">
                    $199
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple iMac
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple AirPods
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $399
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    iPad Pro
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Keyboard
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Smart Folio iPad Air
                </th>
                <td class="px-6 py-4">
                    Blue
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $79
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $29
                </td>
            </tr>
        </tbody>
    </table>

    <div className='flex justify-center mx-auto'>
    <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
        <ul class="inline-flex -space-x-px text-sm h-8">
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
    </nav>

    </div>
    

    {/* KOSIS지표 */}

    
    <div className='m-20 justify-center'>
      <Slider></Slider>
    </div>
    
    

    </div>
  </div>
  

    
    
    
  )
}

function ListViewPeoplePower(){
  
  const PeoplePower=[
    {
      date:'2023-08-21',
      category:'논평',
      title:'‘남 탓’일관 책임 떠넘기기와 ‘정쟁’의 소용돌이 속에서는 결코 진실을 규명할 수 없다. [국민의힘 유상범 수석대변인 논평]'
    },
    {
      date:'2023-08-21',
      category:'보도자료',
      title:'‘	최고위원회의 주요내용 [보도자료]'
    },
    {
      date:'2023-08-21',
      category:'논평',
      title:'한미일 정상회의에 대한 민주당의 폄하는 질투로 가득 찬 피해의식에 불과하다. [국민의힘 신주호 상근부대변인 논평]'
    },
    {
      date:'2023-08-21',
      category:'논평',
      title:'대한민국 사법 시스템을 혼탁하게 만드는 법꾸라지 이재명 대표, 거짓의 악순환 끝에는 단죄만 남을 것이다. [국민의힘 김민수 대변인 논평]'
    },
    {
      date:'2023-08-21',
      category:'논평',
      title:'국민의힘과 윤석열 정부는 ‘엘피아 카르텔’ 혁파를 통해 국민 안전에 만전을 기할 것이다. [국민의힘 배윤주 상근부대변인 논평]'
    }
  ]

  return(
    <div className="border border-gray-200 m-5 p-5 rounded-lg shadow">
      <div className="flex items-center justify-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">국민의힘 논평</h5>
      </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              {PeoplePower.map((elem,index)=>{
                return(
                  <li key={index} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {elem.category}
                      </div>
                      <div className="flex-shrink-0">
                      </div>
                      <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {elem.title}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {elem.date}
                          </p>
                      </div>

                    </div>
                  </li>
                )
              })}
              
              
          </ul>
          <p className="text-base font-semibold text-blue-500 underline mt-2 text-right"><Link target='_blank' className='z-50' href='https://www.naver.com'>Read more</Link></p>       
    </div>
  </div>
  )


}

function ListViewTogetherPeople(){
  
  const TogetherPeople=[
    {
      date:'2023-08-21',
      category:'서면브리핑',
      title:'[권칠승 수석대변인] 윤석열 대통령은 한반도 핵전쟁의 공포를 조장하려고 합니까?'
    },
    {
      date:'2023-08-21',
      category:'논평',
      title:'[이경 상근부대변인] 국민의힘이 국민 안전을 책임지겠다면 최인호 관악구의원을 징계하십시오'
    },
    {
      date:'2023-08-21',
      category:'서면브리핑',
      title:'[최민석 대변인] 지지자들에게 쪼개기 후원을 독려하는 것이 국민의힘의 청년정치입니까?'
    },
    {
      date:'2023-08-21',
      category:'브리핑',
      title:'[박성준 대변인 브리핑] 국방부는 해병대 1사단장의 책임을 면해주려고, 그 난리를 피웠습니까?'
    },
    {
      date:'2023-08-21',
      category:'브리핑',
      title:'[권칠승 수석대변인] 윤석열 대통령은 대한민국의 미래를 ‘시계제로’ 상황에 빠뜨리려고 합니까?'
    }
  ]

  return(
    <div className="border border-gray-200 m-5 p-5 rounded-lg shadow">
      <div className="flex items-center justify-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">더불어민주당 논평</h5>
      </div>
        <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {
            TogetherPeople.map((elem,index)=>(
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {elem.category}
                </div>
                <div className="flex-shrink-0">
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {elem.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {elem.date}
                    </p>
                </div>

              </div>
            </li>
            ))
          }              
          </ul>
          <p className="text-base font-semibold text-blue-500 underline mt-2 text-right"><Link target='_blank' className='z-50' href='https://www.naver.com'>Read more</Link></p>       
    </div>
  </div>
  )


}



function SearchCard(){
  return(
    
<div class="container max-w-3xl px-4 mx-auto sm:px-8">
    <div class="py-8">
        <div class="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 class="text-2xl leading-tight">
                정당정책정보
            </h2>
            <div class="flex gap-x-2 text-end">
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>선거종류</option>
                <option value="BIG">대선</option>
                <option value="ALL">총선</option>
                <option value="REST">지선</option>
              </select>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>지역구1</option>
                <option value="BIG">대선</option>
                <option value="ALL">총선</option>
                <option value="REST">지선</option>
              </select>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>지역구2</option>
                <option value="BIG">대선</option>
                <option value="ALL">총선</option>
                <option value="REST">지선</option>
              </select>
            </div>
            </div>
            <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    User
                                </th>
                                <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    Role
                                </th>
                                <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    Created at
                                </th>
                                <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    status
                                </th>
                                <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <a href="#" class="relative block">
                                                <img alt="profil" src="/images/person/8.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jean marc
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        Admin
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        12/09/2020
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                        </span>
                                        <span class="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <a href="#" class="relative block">
                                                <img alt="profil" src="/images/person/9.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Marcus coco
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        Designer
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        01/10/2012
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                        </span>
                                        <span class="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <a href="#" class="relative block">
                                                <img alt="profil" src="/images/person/10.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Ecric marc
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        Developer
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        02/10/2018
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                        </span>
                                        <span class="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <a href="#" class="relative block">
                                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Julien Huger
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        User
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        23/09/2010
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                        </span>
                                        <span class="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>

  )
}


