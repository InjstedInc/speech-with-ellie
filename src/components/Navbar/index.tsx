'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { contentfulClient } from '@/src/lib/contentful/client'

interface NavItem {
  title: string
  href: string
}

const defaultNavItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Contact', href: '/contact' },
]

const Navbar: React.FC = () => {
  const [navItems, setNavItems] = useState<NavItem[]>(defaultNavItems)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'navItem',
        })
        if (response.items.length > 0) {
          const items = response.items.map((item: any) => ({
            title: item.fields.title,
            href: item.fields.href,
          }))
          setNavItems(items)
        }
      } catch (error) {
        console.error('Error fetching nav items:', error)
      }
    }

    fetchNavItems()
  }, [])

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link className='text-xl font-bold' href='/'>
                Speech with Ellie
              </Link>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {navItems.map((item, index) => (
                  <Link
                    className='text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium'
                    key={index}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded={isOpen}
            >
              <span className='sr-only'>Open main menu</span>
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {navItems.map((item, index) => (
            <Link
              className='text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium'
              key={index}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
