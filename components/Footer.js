'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation';
import LoginBtn from './LoginBtn';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import ArticleModal from './ArticleModal';
export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname==="/"){
    return (

    <div>
      <footer className="bg-white dark:bg-gray-900">
          <div className="px-20">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
              <div className='mx-auto'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">소개</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <Link href="/about" className="hover:underline">미래민중은</Link>
                      </li>
                      <li className="mb-4">
                        <Link href="/service" className="hover:underline">서비스범위</Link>
                      </li>
                  </ul>
              </div>
              <div className='mx-auto'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">제휴협력 및 연구의뢰</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="http://www.realmeter.net/%EC%A1%B0%EC%82%AC%EC%9D%98%EB%A2%B0/" target='_blank' className="hover:underline">리얼미터</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://www.gallup.co.kr/inquiry/askResearch.asp" target='_blank' className="hover:underline">갤럽</a>
                      </li>
                  </ul>
              </div>
              <div className='mx-auto'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">관리자센터</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <LoginBtn></LoginBtn>
                          
                      </li>
                      <li>
                      
                      <button
                      type="submit"
                      className="flex justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      
                      >
                      <Link href='/admin/list'>
                      관리자 사이트로 이동
                      </Link>
                      </button>
                      
                      </li>
                  </ul>

              </div>
          </div>


          </div>

      </footer>
      <div className="px-4 py-6 bg-gray-300 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center"> POWERED BY AURAWORKS</span>
            <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
    </div>

    )
  }else{
    return <div></div>
  }
}
