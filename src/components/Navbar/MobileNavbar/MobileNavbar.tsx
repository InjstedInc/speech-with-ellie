import React from 'react'
import { DisclosurePanel } from '@headlessui/react'
import { NavbarItem } from '@/src/components/Navbar/types'
import MobileNavbarItems from '@/src/components/Navbar/MobileNavbar/MobileNavbarItems'

interface NavbarProps {
  navbarItems: NavbarItem[]
}

const MobileNavbar: React.FC<NavbarProps> = ({ navbarItems }) => {
  return (
    <DisclosurePanel className='sm:hidden'>
      <MobileNavbarItems navbarItems={navbarItems} />
    </DisclosurePanel>
  )
}

export default MobileNavbar
