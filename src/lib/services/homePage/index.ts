import { Entry } from 'contentful'
import { TypeLandingPageSkeleton } from '@/src/generated'
import { contentfulClient } from '@/src/lib/contentful/client'
import { cache } from 'react'

export const getLandingPage = cache(
  async (): Promise<Entry<TypeLandingPageSkeleton>> => {
    const id = '29B1G6P1ExMGhZ4GLom7TZ'
    return await contentfulClient.getEntry(id, { include: 2 })
  },
)
