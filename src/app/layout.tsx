import type { Metadata } from 'next'
import './globals.css'
import NavigationBar from '@/src/components/Navbar'
import { getNavbarItems } from '@/src/lib/services/navbar'
import { Entry } from 'contentful'
import { TypeNavbarItemSkeleton } from '@/src/generated'
import React from 'react'
import { NavbarItem } from '@/src/components/Navbar/types'
import { inter } from '@/src/app/fonts'

export const metadata: Metadata = {
  title: 'Speech with Ellie',
  description:
    'Speech with Ellie is a speech therapy service in New York City.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navbarItemsEntry = await getNavbarItems()
  // console.log('navbarItemsEntry', JSON.stringify(navbarItemsEntry, null, 2))
  const items = navbarItemsEntry.fields.items as Entry<TypeNavbarItemSkeleton>[]
  const navbarItems = items
    .map((item) => {
      return {
        title: item.fields?.title as string,
        urlPath: item.fields?.urlPath as string,
        order: item.fields?.order as number,
        children: (
          item.fields?.children as Entry<TypeNavbarItemSkeleton>[]
        )?.map((item) => item.fields as NavbarItem),
      }
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0))

  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container mx-auto'>
          <NavigationBar navbarItems={navbarItems} />
          {children}
        </div>
      </body>
    </html>
  )
}
