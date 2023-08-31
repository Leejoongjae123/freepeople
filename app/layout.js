import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

import { usePathname, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { SessionProvider } from 'next-auth/react'
import LoginBtn from '@/components/LoginBtn'

export default async function RootLayout({ children }) {
  let session=await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="en">
      <body className="">
      <Navbar></Navbar>
        {children}
      <Footer></Footer>
      <LoginBtn></LoginBtn>
      </body>
    </html>
  )
}
