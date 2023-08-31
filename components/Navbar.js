'use client'
import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import {Link} from 'react-scroll'
import { usePathname, useRouter } from 'next/navigation';


export default function Navbar() {

  const scrollDown = () => {
    // 스크롤할 픽셀 값
    const scrollAmount = 300; // 원하는 만큼 조정

    // 현재 스크롤 위치
    const currentPosition = window.pageYOffset;

    // 원하는 만큼 아래로 스크롤
    window.scrollTo(0, currentPosition + scrollAmount);
  };

    const navigation = [
        { name: '홈', href: '/', current: false },
        { name: '컬럼/연구', href: '/', current: false },
        { name: '국민/대통령', href: '/', current: false },
        { name: '정책/이슈', href: '/', current: false },
        { name: '컬럼/연구', href: '/', current: false },
        { name: '통계/선거', href: '/', current: false },
        ]
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
        }
    
    const pathname = usePathname();
    const router = useRouter();
  if (pathname==="/"){
    return (
        <Disclosure as="nav" className="bg-gray-800 fixed w-full z-50">
          {({ open }) => (
            <>
              <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="items-center justify-center relative flex h-16 space-x-4 text-lg">
                        {navigation.map((item,index) => (
                          <Link to={index} spy={true} smooth={true} offset={-50}>
                          <button
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white ',
                              'rounded-md px-3 py-2'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </button>
                          </Link>
                        ))}
                
                
                </div>
              </div>

    
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
          
          </Disclosure>
      )
  } else{
    return null;
  }
  
}
