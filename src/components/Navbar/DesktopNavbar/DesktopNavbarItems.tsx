import React from 'react'
import Link from 'next/link'
import { NavbarItem } from '@/src/components/Navbar/types'
import { usePathname } from 'next/navigation'
import { defaultNavItems } from '@/src/components/Navbar/static'

interface NavbarItemsProps {
  navbarItems: NavbarItem[]
}

const DesktopNavbarItems: React.FC<NavbarItemsProps> = ({ navbarItems }) => {
  const pathname = usePathname()

  const getNavLinks = (items: NavbarItem[]) => {
    return items.map((item) => {
      const isActive = pathname === item.urlPath
      return (
        <Link
          key={item.title}
          href={item.urlPath}
          className={`inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 ${
            isActive
              ? ' border-b-2 border-brand-blue'
              : 'bg-transparent border-transparent'
          }`}
        >
          {item.title}
        </Link>
      )
    })
  }

  return (
    <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
      {navbarItems.length > 0
        ? getNavLinks(navbarItems)
        : getNavLinks(defaultNavItems)}
    </div>
  )
}

export default DesktopNavbarItems
