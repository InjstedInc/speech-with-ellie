import { cache } from 'react'
import { Entry } from 'contentful'
import { TypeFaqPageSkeleton } from '@/src/generated'
import { contentfulClient } from '@/src/lib/contentful/client'

export const getFaqPage = cache(
  async (): Promise<Entry<TypeFaqPageSkeleton>> => {
    const id = '1fdiDCk0aBhsVsQ5mT9vtZ'
    return await contentfulClient.getEntry(id, { include: 2 })
  },
)
