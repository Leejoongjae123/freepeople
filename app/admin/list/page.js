
import React from 'react'
import Link from 'next/link'
import TopicsList from '@/components/TopicsList'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function page() {
  let session=await getServerSession(authOptions)
  return (


    <>
    <div className='flex'>
      <div className='w-64'>
      </div>
      <div className='flex-1 bg-white'>
        {session.user.email==='hellfir2@jr.naver.com'?(
        <>
        <TopicsList></TopicsList>
        <nav aria-label="Page navigation example">
          <div className='flex'>
            <div className="w-64">
            </div>
            <div className="flex mx-auto bg-white">
            </div>
          </div>
        </nav>
        </>
        ):(
          <div className='w-full h-100 text-center text-9xl'>당신은 관리자가 아닙니다.</div>
        )}
        

      </div>
      
      
    </div>
    
    
    </>
  )
}
