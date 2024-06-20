import { NavbarItem } from '@/src/components/Navbar/types'
import { usePathname } from 'next/navigation'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import React from 'react'
import Link from 'next/link'
import { defaultNavItems } from '@/src/components/Navbar/static'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid'

interface MobileNavbarItemsProps {
  navbarItems: NavbarItem[]
}
const MobileNavbarItems: React.FC<MobileNavbarItemsProps> = ({
  navbarItems,
}) => {
  const pathname = usePathname()
  const getNavButtons = (navItems: NavbarItem[]) => {
    return navItems.map((item) => {
      const isActive =
        pathname === item.urlPath ||
        item.children?.some((child) => child.urlPath === pathname)

      if (item.children) {
        return (
          <Disclosure key={item.title} as='div'>
            {({ open }) => (
              <>
                <DisclosureButton
                  className={`block w-full border-l-4 py-2 pl-3 pr-4 text-left text-base font-medium ${
                    isActive
                      ? 'border-brand-blue font-semibold text-text-primary'
                      : 'border-transparent text-text-light'
                  }`}
                >
                  <div className='flex justify-between items-center'>
                    {item.title}
                    {open ? (
                      <ChevronUpIcon className='h-5 w-5' />
                    ) : (
                      <ChevronDownIcon className='h-5 w-5' />
                    )}
                  </div>
                </DisclosureButton>
                <DisclosurePanel className='space-y-1 pl-6'>
                  {item.children?.map((child) => (
                    <Link
                      key={child.title}
                      href={child.urlPath}
                      className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                        pathname === child.urlPath
                          ? 'border-brand-blue font-semibold text-text-primary'
                          : 'border-transparent text-text-light'
                      }`}
                    >
                      {child.title}
                    </Link>
                  ))}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        )
      }
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
