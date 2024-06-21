import { contentfulClient } from '@/src/lib/contentful/client'
import { Entry } from 'contentful'
import { TypeNavbarItemsSkeleton } from '@/src/generated'
import { cache } from 'react'

export const getNavbarItems = cache(
  async (): Promise<Entry<TypeNavbarItemsSkeleton>> => {
    const id = '7AEOerAIO2oyIsM7jxRevW'
    return await contentfulClient.getEntry(id, { include: 2 })
  },
)
