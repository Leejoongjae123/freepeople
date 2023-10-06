
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getServerSession } from 'next-auth'
// import { authOptions } from '../../api/auth/[...nextauth]/route'

import { SessionProvider } from 'next-auth/react'
import LoginBtn from '@/components/LoginBtn'
import { Roboto } from '@next/font/google'
import Head from 'next/head'


export default async function RootLayout({ children }) {

  
  
  return (
    <html lang="kr">

      <body className="">
      <Navbar></Navbar>
        {children}
      <Footer></Footer>
      </body>
    </html>
  )
}
