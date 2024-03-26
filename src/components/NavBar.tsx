import Image from 'next/image';
import logo from '@/assets/pepe-logo.png'
import Link from 'next/link';
import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/avatar';

export default function NavBar() {
    // img on assets logo.png
    return (
        <>
            <div className='flex items-center justify-between h-14 p-4 text-white'>
                <div>
                    <Image src={logo} alt='logo' height={32} />
                </div>
                {/* AT CENTER big text: Lavanderia EL PEPE */}
                <div className='flex items-center justify-center text-black flex-grow font-bold text-2xl'>
                    LAVANDERIA EL PEPE
                </div>
                {/* AT RIGHT: Home, About, Services, Contact */}
                <div className='flex items-center justify-end space-x-4 text-black'>
                    <Avatar name='Sech' />

                </div>
            </div>
            <div className='container mx-auto mt-4 px-4'>
                <h2 className='text-xl font-semibold text-center'>&apos;Tu ropa, nuestra pasión: ¡lavamos tus preocupaciones!&apos;</h2>
                <nav className="flex justify-center space-x-4 py-4 underline ">
                    <Link className="block hover:text-blue-500" href="/">
                        Inicio
                    </Link>
                    <Link className="block hover:text-blue-500" href="/servicios">
                        Servicios
                    </Link>
                    <Link className="block hover:text-blue-500" href="/nosotros">
                        Nosotros
                    </Link>
                    <Link className="block hover:text-blue-500" href="/contacto">
                        Contacto
                    </Link>
                </nav>
            </div>
        </>
    )
}
/*

'use client'

import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

*/