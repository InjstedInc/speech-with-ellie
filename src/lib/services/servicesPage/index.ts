import { cache } from 'react'
import { contentfulClient } from '@/src/lib/contentful/client'
import { Entry } from 'contentful'
import { TypeServicesPageSkeleton } from '@/src/generated'

export const getServicesPage = cache(
  async (): Promise<Entry<TypeServicesPageSkeleton>> => {
    const id = '6LXNVXxTgIcCCT3ns8sivw'
    return await contentfulClient.getEntry(id, { include: 2 })
  },
)
