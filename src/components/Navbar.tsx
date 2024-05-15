'use client'

import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { User } from 'next-auth'
import { Button } from '@react-email/components'

const Navbar = () => {
    const {data: session} = useSession()

    const user: User = session?.user as User

  return (
    <nav className="p-4 md:p-6 shadow-md bg-white text-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <a href="#" className="text-xl font-bold mb-4 md:mb-0">Mystry Messaging</a>
            {
                session ? (
                    <>
                    <span className="mr-4">Welcome, {user?.username || user.email}</span>
                    <Button onClick={() => signOut()} className="w-full md:w-auto bg-black px-6 py-2 rounded text-slate-100">Logout</Button>
                    </>
                ) : (
                    <Link href='/sign-in'>
                        <Button className="w-full md:w-auto bg-black px-6 py-2 rounded text-slate-100">Login</Button>
                    </Link>
                )
            }
        </div>
    
    </nav>
  )
}

export default Navbar