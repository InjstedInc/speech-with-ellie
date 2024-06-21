import { Entry } from 'contentful'
import { TypeLandingPageSkeleton } from '@/src/generated'
import { contentfulClient } from '@/src/lib/contentful/client'

export const getLandingPage = async (): Promise<
  Entry<TypeLandingPageSkeleton>
> => {
  const id = '29B1G6P1ExMGhZ4GLom7TZ'
  return await contentfulClient.getEntry(id, { include: 2 })
}
