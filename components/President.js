'use client'
import React from 'react';
import {FcVoicePresentation} from 'react-icons/fc'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Link from 'next/link';
export default function President() {

  const [presidentRealmeter,setPresidentRealmeter] = useState([]);
  const [presidentRealmeterLoading, setPresidentRealmeterLoading] = useState(true);

  const [presidentNBS,setPresidentNBS] = useState([]);
  const [presidentNBSLoading, setPresidentNBSLoading] = useState(true);

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
    fetchData1(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData2(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  console.log('presidentRealmeter:',presidentRealmeter)
  console.log('presidentNBS:',presidentNBS)

  return (
    <>
      <div className="mx-auto flex-col lg:mx-0">
        <div className='flex items-center'>
            <FcVoicePresentation size='40'></FcVoicePresentation>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">국민/대통령</h2>
        </div>
        <div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            정부/대통령 관련 자료
            </p>
        </div>   
      </div>

    <section className="bg-white dark:bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-8 lg:px-6 ">

            
            <div className="px-20 pt-10 grid gap-8 md:grid-cols-2">
                {presidentRealmeterLoading?(
                  <div className='flex w-full h-full'> 
                    <Spinner></Spinner>
                  </div> 
                ):(
                <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                  <div className='w-full h-full h-3/4'>
                    <img className="h-full w-full object-cover rounded-t-lg " src={presidentRealmeter[0]['imageSrc']} alt="Bonnie Avatar"/>
                  </div>
                  <div className="mt-5 h-1/4 w-full">
                    <h3 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                      {presidentRealmeter[0]['title']}
                    </h3>
                    <div className='text-center'>
                      <span className="text-gray-500 dark:text-gray-400">{presidentRealmeter[0]['regiDate']}</span>
                    </div>
                    <div className='text-right pr-5'>
                      <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='http://www.realmeter.net/category/politics/'>Read more</Link></p>
                    </div>  
                  </div>
                  
                  
                </div> 
                )}

                {presidentNBSLoading?(
                  <div className='flex w-full h-full'> 
                    <Spinner></Spinner>
                  </div> 
                  ):(
                  <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <div className='w-full h-3/4'>
                      <img className="w-full h-full object-cover rounded-t-lg " src={presidentNBS[0]['imageSrc']} alt="Bonnie Avatar"/>
                    </div>
                    <div className="mt-5 h-1/4 w-full">
                      <h3 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                        {presidentNBS[0]['title']}
                      </h3>
                      <div className='text-center'>
                        <span className="text-gray-500 dark:text-gray-400">{presidentNBS[0]['regiDate']}</span>
                      </div>
                      <div className='text-right pr-5'>
                        <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='http://nbsurvey.kr/'>Read more</Link></p>
                      </div>  
                    </div>
                    
                    
                  </div> 
                )}

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" class="px-6 py-3">
                                  Product name
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Color
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Category
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Price
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Action
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
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
                              <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
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
                              <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
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
                              <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Google Pixel Phone
                              </th>
                              <td class="px-6 py-4">
                                  Gray
                              </td>
                              <td class="px-6 py-4">
                                  Phone
                              </td>
                              <td class="px-6 py-4">
                                  $799
                              </td>
                              <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                          <tr>
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Apple Watch 5
                              </th>
                              <td class="px-6 py-4">
                                  Red
                              </td>
                              <td class="px-6 py-4">
                                  Wearables
                              </td>
                              <td class="px-6 py-4">
                                  $999
                              </td>
                              <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                </div>


                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" class="px-6 py-3">
                                  Product name
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Color
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Category
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Price
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Action
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
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
                              <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
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
                              <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
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
                              <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Google Pixel Phone
                              </th>
                              <td class="px-6 py-4">
                                  Gray
                              </td>
                              <td class="px-6 py-4">
                                  Phone
                              </td>
                              <td class="px-6 py-4">
                                  $799
                              </td>
                              <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                          <tr>
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Apple Watch 5
                              </th>
                              <td class="px-6 py-4">
                                  Red
                              </td>
                              <td class="px-6 py-4">
                                  Wearables
                              </td>
                              <td class="px-6 py-4">
                                  $999
                              </td>
                              <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                </div>

            </div>  
        </div>
      </section>
    </>
  )
}
