import { contentfulClient } from '@/src/lib/contentful/client'
import { Entry } from 'contentful'
import { TypeNavbarItemsSkeleton } from '@/src/generated'

export const getNavbarItems = async (): Promise<
  Entry<TypeNavbarItemsSkeleton>
> => {
  const id = '7AEOerAIO2oyIsM7jxRevW'
  return await contentfulClient.getEntry(id, { include: 2 })
}
