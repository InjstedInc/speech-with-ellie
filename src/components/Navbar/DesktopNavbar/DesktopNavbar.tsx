import React from 'react'
import { caveat } from '@/src/app/fonts'
import DesktopNavbarItems from '@/src/components/Navbar/DesktopNavbar/DesktopNavbarItems'
import { DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { NavbarItem } from '@/src/components/Navbar/types'
import Image from 'next/image'

interface DesktopNavbarProps {
  open: boolean
  navbarItems: NavbarItem[]
}
const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ open, navbarItems }) => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex h-16 justify-between'>
        <div className='flex'>
          <div className='flex flex-shrink-0 items-center'>
            <div className='relative h-12 w-12'>
              <Image
                src='/ellies.svg'
                fill
                style={{ objectFit: 'contain' }}
                alt='Speech With Ellie'
              />
            </div>
            <span className={`${caveat.className} text-3xl font-extralight`}>
              Speech With Ellie
            </span>
          </div>
        </div>
        <div className='hidden sm:ml-6 sm:flex sm:items-center'>
          <DesktopNavbarItems navbarItems={navbarItems} />
        </div>
        <div className='-mr-2 flex items-center sm:hidden'>
          {/* Mobile menu button */}
          <DisclosureButton className='relative inline-flex items-center justify-center rounded-md p-2 text-text-primary hover:bg-transparent hover:text-text-primary focus:outline-none focus:ring-1 focus:ring-inset focus:ring-text-primary'>
            <span className='absolute -inset-0.5' />
            <span className='sr-only'>Open main menu</span>
            {open ? (
              <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
            ) : (
              <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
            )}
          </DisclosureButton>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavbar
