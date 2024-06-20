'use client'
import React from 'react'
import { NavbarItem } from '@/src/components/Navbar/types'
import '@/src/app/globals.css'
import { Disclosure } from '@headlessui/react'
import DesktopNavbar from '@/src/components/Navbar/DesktopNavbar/DesktopNavbar'
import MobileNavbar from '@/src/components/Navbar/MobileNavbar/MobileNavbar'

interface NavbarProps {
  navbarItems: NavbarItem[]
}

const NavigationBar: React.FC<NavbarProps> = ({ navbarItems }) => {
  return (
    <Disclosure as='nav' className='bg-transparent'>
      {({ open }) => (
        <>
          <DesktopNavbar open={open} navbarItems={navbarItems} />
          <MobileNavbar navbarItems={navbarItems} />
        </>
      )}
    </Disclosure>
  )
}

export default NavigationBar
