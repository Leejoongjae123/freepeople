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
      <footer className="bg-gray-500 dark:bg-gray-900">
          <div className="px-20">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
              <div className='mx-auto'>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">소개</h2>
                  <ul className="text-black dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <Link href="/about" className="hover:underline">미래민중은</Link>
                      </li>
                      <li className="mb-4">
                        <Link href="/service" className="hover:underline">서비스범위</Link>
                      </li>
                  </ul>
              </div>
              <div className='mx-auto'>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">제휴협력 및 연구의뢰</h2>
                  <ul className="text-black dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="http://www.realmeter.net/%EC%A1%B0%EC%82%AC%EC%9D%98%EB%A2%B0/" target='_blank' className="hover:underline">리얼미터</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://www.gallup.co.kr/inquiry/askResearch.asp" target='_blank' className="hover:underline">갤럽</a>
                      </li>
                  </ul>
              </div>
              <div className='mx-auto'>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">관리자센터</h2>
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
    </div>

    )
  }else{
    return <div></div>
  }
}
