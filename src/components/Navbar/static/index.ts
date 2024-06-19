import { NavbarItem } from '@/src/components/Navbar/types'

export const defaultNavItems: NavbarItem[] = [
  { title: 'Home', urlPath: '/' },
  { title: 'About', urlPath: '/about' },
  {
    title: 'Services',
    urlPath: '/services',
    children: [
      { title: 'Web Development', urlPath: '/services/web-development' },
    ],
  },
  { title: 'Contact', urlPath: '/contact' },
]
