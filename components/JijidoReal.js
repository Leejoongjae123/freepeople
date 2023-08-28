'use client'
import React from 'react'
import Link from 'next/link'

export default function JijidoReal() {
  
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

  return (
    <>
      <div className="group relative">
          <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">{jijidoReal.groupName}</h2>
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
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
    </>
  )
}
