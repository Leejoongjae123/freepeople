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
import Election from '@/components/Election'


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
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">정치/경제 종합 정보 제공</h2> */}
          <p className="mt-3 font-bold text-2xl leading-8 text-sky-900">
            민중의, 민중을 위한, 민중에 의한
          </p>
          <h1 className="my-5 font-bold tracking-tight text-gray-900 lg:text-6xl sm:text-2xl">
            미 래 민 중
          </h1>
          
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


    <Element name="5"></Element>
    <div className="bg-gray-100 px-20 py-10">
      <Election></Election>
    </div>




    

    </div>
  

    
    
    
  )
}












