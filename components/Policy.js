'use client'
import React from 'react';
import {FcDocument} from 'react-icons/fc'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Link from 'next/link';


export default function Policy() {

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
            <FcDocument size='40'></FcDocument>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">정책/이슈</h2>
        </div>
        <div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            주요 정책 및 동향
            </p>
        </div>   
      </div>
      
      <div className=' py-10 px-40'>
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <div className="items-center bg-gray-50 rounded-lg shadow grid grid-cols-3">
          <div className='col-span-1'>
            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/KDI-removebg-preview.png" alt="Bonnie Avatar"/>
          </div>
          <div className="col-span-2 p-5">
            <div>
              <h3 className='text-2xl text-center font-bold my-3'>정책자료</h3>
            </div>
            
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
              </li>
              <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
              </li>
              <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
              </li>
            </ul>              
          </div>
        </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow grid grid-cols-3">
            <div className='col-span-1'>
              <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/yeoyuido-removebg-preview.png" alt="Jese Avatar"/>
            </div>
            <div className="col-span-2 p-5">
              <div>
                <h3 className='text-2xl text-center font-bold my-3'>정책자료</h3>
              </div>
              <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                </li>
              </ul>                
            </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow grid grid-cols-3">
            <div className='col-span-1'>
              <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/minju-removebg-preview.png" alt="Michael Avatar"/>
            </div>
            

            <div className="col-span-2 p-5">
              <div>
                <h3 className='text-2xl text-center font-bold my-3'>정책자료</h3>
              </div>
              <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                </li>
              </ul>                
            </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow grid grid-cols-3">
            <div className='col-span-1'>
              <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/KDI-removebg-preview.png" alt="Sofia Avatar"/>
            </div>
            <div className="col-span-2 p-5">
              <div>
                <h3 className='text-2xl text-center font-bold my-3'>동향자료</h3>
              </div>
              <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                </li>
              </ul>              
            </div>
          </div>  
      </div>          
      </div>
    

    
    </>
  )
}
