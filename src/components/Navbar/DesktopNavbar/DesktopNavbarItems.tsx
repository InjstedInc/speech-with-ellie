import React from 'react'
import Link from 'next/link'
import { NavbarItem } from '@/src/components/Navbar/types'
import { usePathname } from 'next/navigation'
import { defaultNavItems } from '@/src/components/Navbar/static'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

interface NavbarItemsProps {
  navbarItems: NavbarItem[]
}

const DesktopNavbarItems: React.FC<NavbarItemsProps> = ({ navbarItems }) => {
  const pathname = usePathname()

  const getNavLinks = (items: NavbarItem[]) => {
    return items.map((item) => {
      const isActive = pathname === item.urlPath

      if (item.children) {
        return (
          <Menu key={item.title} as='div' className='relative'>
            <MenuButton
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium text-text-primary ${
                isActive ? 'border-b-2 border-brand-blue' : 'border-transparent'
              }`}
            >
              {item.title}
              <ChevronDownIcon className='ml-1 h-5 w-5' />
            </MenuButton>
            <MenuItems className='absolute rounded-lg z-10 mt-2 w-48 shadow-xl bg-opacity-100 backdrop-filter backdrop-blur-xl'>
              {item.children.map((child) => (
                <MenuItem key={child.title}>
                  {({ focus }) => (
                    <Link
                      href={child.urlPath}
                      className={`block px-4 rounded-lg py-2 text-sm bg-opacity-100 backdrop-filter backdrop-blur-xl ${focus ? 'bg-brand-lightblue' : ''}`}
                    >
                      {child.title}
                    </Link>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        )
      }

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
