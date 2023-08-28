
import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import Image from 'next/image'
export default function TopicsList() {

  return (
    <>
      <div className="flex w-full items-center bg-white border border-gray-200 rounded-lg shadow ">
        <img className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://shop-phinf.pstatic.net/20221220_60/1671512155404m34vw_JPEG/72647989066429637_1719202779.jpg?type=m510" alt=""/>
        <div className="flex flex-col justify-between p-4 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <mark class="w-24 text-center px-2 text-white bg-blue-600 rounded dark:bg-blue-500">빅카인즈</mark>
        </div>
        <div className='flex gap-2'>
        <RemoveBtn/>
        <Link href={'/editTopic/123'}>
          <HiPencilAlt size={24}></HiPencilAlt>
        </Link>
        </div>
      </div>
      


    {/* </div> */}
    </>
  )
}
