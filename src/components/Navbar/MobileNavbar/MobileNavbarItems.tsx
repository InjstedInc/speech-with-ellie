import { NavbarItem } from '@/src/components/Navbar/types'
import { usePathname } from 'next/navigation'
import { DisclosureButton } from '@headlessui/react'
import React from 'react'
import Link from 'next/link'
import { defaultNavItems } from '@/src/components/Navbar/static'

interface MobileNavbarItemsProps {
  navbarItems: NavbarItem[]
}
const MobileNavbarItems: React.FC<MobileNavbarItemsProps> = ({
  navbarItems,
}) => {
  const pathname = usePathname()
  const getNavButtons = (navItems: NavbarItem[]) => {
    return navItems.map((item) => {
      const isActive = pathname === item.urlPath
      return (
        <DisclosureButton
          key={item.title}
          as={Link}
          href={item.urlPath}
          className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
            isActive
              ? 'border-brand-blue font-semibold text-text-primary'
              : 'border-transparent text-text-light'
          }`}
        >
          {item.title}
        </DisclosureButton>
      )
    })
  }
  return (
    <div className='space-y-1 pb-3 pt-2'>
      {navbarItems.length > 0
        ? getNavButtons(navbarItems)
        : getNavButtons(defaultNavItems)}
    </div>
  )
}

export default MobileNavbarItems
