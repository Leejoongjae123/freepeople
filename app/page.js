'use client'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
import Link from 'next/link'
// import ApexCharts from "react-apexcharts";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });






function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ')
}

export default function Home() {
  let varaaa=[]

  const jijidoReal = 
    {
      date: '2023-08-21',
      title: '[리얼미터 8월 3주 차 주간 동향] 尹 대통령 긍정평가 35.6%(2.7%P↓)…부정평가 61.2%…14주 만에 60%대 진입',
      imageSrc: 'http://www.realmeter.net/wp-content/uploads/2023/08/98599_134406_1692420381-351x185.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      groupName:'대통령지지도(리얼미터)',
      readMore:'http://www.realmeter.net/category/politics/',
      href: '#',
    }
  const jijidoNBS={
      date: '2023-08-17',
      title: '전국지표조사 리포트 제103호(2023년 8월 3주)',
      imageSrc: 'https://i0.wp.com/nbsurvey.kr/wp-content/uploads/2020/08/logo_2-e1597095556507.png?fit=822%2C359',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      groupName:'대통령지지도(NBS)',
      readMore:'http://nbsurvey.kr/',
      href: '#',
    }
  const captainBriefs=[{
      date: '2023-08-21',
      title: "尹 대통령, 캠프 데이비드 정상회의는 포괄적 협력체계를 제도화한 '매우 특별한 회의'",
      imageSrc: "",
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      groupName:'대통령실 브리핑',
      readMore:'https://www.president.go.kr/newsroom/briefing',
      href: '#',
    },
    {
      date: '2023-08-21',
      title: "尹 대통령, 한 총리에 '묻지마 범죄' 근본적 대책 마련 지시",
      imageSrc: "",
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      groupName:'대통령실 브리핑',
      readMore:'https://www.president.go.kr/newsroom/briefing',
      href: '#',
    },
    {
      date: '2023.08.21',
      title: "尹 대통령, 을지 국가안전보장회의 주재",
      imageSrc: "",
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      groupName:'대통령실 브리핑',
      readMore:'https://www.president.go.kr/newsroom/briefing',
      href: '#',
    }]
  const captainPresss=[{
      date: '2023-08-18',
      title: "한미일 정상회의 계기 한일 정상회담 결과",
      imageSrc: "",
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      groupName:'대통령실 보도자료',
      readMore:'https://www.president.go.kr/newsroom/press',
      href: '#',
    },
    {
      date: '2023-08-18',
      title: "캠프 데이비드 한미 정상회담 결과",
      imageSrc: "",
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      groupName:'대통령실 보도자료',
      readMore:'https://www.president.go.kr/newsroom/press',
      href: '#',
    },
    {
      date: '2023-08-18',
      title: "캠프 데이비드 정신: 한미일 정상회의 공동성명",
      imageSrc: "",
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      groupName:'대통령실 보도자료',
      readMore:'https://www.president.go.kr/newsroom/press',
      href: '#',
    }]

  return (
    <>
    <div className="bg-white py-6 sm:py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center lg:mt-20">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">정치/경제 종합 포털</h2>
          <h1 className="mt-2 font-bold tracking-tight text-gray-900 sm:text-4xl">
            미 래 민 중
          </h1>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            미래 민중은 민중의, 민중을 위한, 민중에 의한 정치/경제 종합 포털 사이트입니다.
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            객관성, 균형성, 미래성 있는 자료를 바탕으로 공동체성의 회복을 지향합니다.
          </p>
        </div>
      </div>
    </div>

    
    <div className="bg-gray-100">
      <div className="mx-auto px-6 py-6">
        <div className="mx-auto px-10 py-10 sm:py-24 lg:py-6">
          <div className="mt-2 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:space-y-3">
            <div className="group relative">
              <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">{jijidoReal.groupName}</h2>
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                src={jijidoReal.imageSrc}
                alt={jijidoReal.imageAlt}
                className="h-full w-full object-cover object-center"
                />
                </div>
              <h3 className="mt-6 text-sm text-gray-500">
                  {jijidoReal.date}
              </h3>
              <p className="text-base font-semibold text-gray-900">{jijidoReal.title}</p>
              <p className="text-base font-semibold text-blue-500 underline mt-2 text-right"><Link target='_blank' className='z-50' href={jijidoReal.readMore}>Read more</Link></p>
            </div>
            <div className="group relative">
              <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">{jijidoNBS.groupName}</h2>
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                src={jijidoNBS.imageSrc}
                alt={jijidoNBS.imageAlt}
                className="h-full w-full object-cover object-center"
                />
                </div>
              <h3 className="mt-6 text-sm text-gray-500">
                  {jijidoNBS.date}
              </h3>
              <p className="text-base font-semibold text-gray-900">{jijidoNBS.title}</p>
              <p className="text-base font-semibold text-blue-500 underline mt-2 text-right"><Link target='_blank' className='z-50' href={jijidoNBS.readMore}>Read more</Link></p>
              
            </div>
            <div className="group relative">
              <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">대통령실 브리핑</h2>
              {
                captainBriefs.map((captainBrief)=>{
                  return (
                  <div>
                    <h3 className="mt-6 text-sm text-gray-500">
                        {captainBrief.date}
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{captainBrief.title}</p>
                  </div>
    
                  )
                })
              }
              <p className="text-base font-semibold text-blue-500 underline mt-2 text-right"><Link target='_blank' className='z-50' href={captainBriefs[0].readMore}>Read more</Link></p>       
            </div>
            <div className="group relative">
              <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">대통령실 보도자료</h2>
              {
                captainPresss.map((captainPress)=>{
                  return (
                  <div>
                    <h3 className="mt-6 text-sm text-gray-500">
                        {captainPress.date}
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{captainPress.title}</p>
                  </div>
    
                  )
                })
              }
              <p className="text-base font-semibold text-blue-500 underline mt-2 text-right"><Link target='_blank' className='z-50' href={captainPresss[0].readMore}>Read more</Link></p>       
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid mx-auto w-full lg:grid-cols-2 sm:grid-cols-1">
      <ListViewPeoplePower></ListViewPeoplePower>
      <ListViewTogetherPeople></ListViewTogetherPeople>
    </div>

    <div className="grid mx-auto flex px-6 py-12 lg:grid-cols-3 sm:lg:grid-cols-1"> 
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
    </div>

    <div className="mx-auto flex py-3">
      <FromTheBlog></FromTheBlog>
    </div>

    </>

    
    
    
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
    <div className="p-4 mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">국민의힘</h5>
      </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              {PeoplePower.map((elem)=>{
                return(
                  <li className="py-3 sm:py-4">
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
    <div className="p-4 mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">더불어민주당</h5>
      </div>
        <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {
            TogetherPeople.map((elem)=>(
            <li className="py-3 sm:py-4">
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
    </div>
  </div>
  )


}

function FromTheBlog(){
  let posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]

  

  return(
    <div className="bg-gray-100">
    <div className="mx-auto px-6 lg:px-8 sm:py-8" >
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 border-t border-gray-200 pt-6 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post,index) => (
          <article key={index} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
              <a
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.category.title}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={post.author.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </a>
                </p>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
  )
}

function Carousel(){
  return(
    
<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>

    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

  )
}

