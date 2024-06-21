import { cache } from 'react'
import { contentfulClient } from '@/src/lib/contentful/client'
import { TypeAboutPageSkeleton } from '@/src/generated'
import { Entry } from 'contentful'

export const getAboutPage = cache(
  async (): Promise<Entry<TypeAboutPageSkeleton>> => {
    const id = '4dqmupyuLkAncTMrJgHf0t'
    return await contentfulClient.getEntry(id, { include: 2 })
  },
)
