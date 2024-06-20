import { createClient, CreateClientParams } from 'contentful'
import ContentfulConfigError from '@/src/lib/contentful/error/ContentfulConfigError'

function getContentfulConfig(): CreateClientParams {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_DELIVERY_API_TOKEN
  const cManagementToken = process.env.CONTENTFUL_ACCESS_TOKEN
  if (!space)
    throw new ContentfulConfigError(
      'The `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` environment variable is required to connect to Contentful',
    )
  if (!accessToken)
    throw new ContentfulConfigError(
      'The `CONTENTFUL_DELIVERY_API_TOKEN` environment variable is required to connect to Contentful',
    )
  if (!cManagementToken)
    throw new ContentfulConfigError(
      'The `CONTENTFUL_ACCESS_TOKEN` environment variable is required to connect to Contentful',
    )
  return { space, accessToken }
}

export const contentfulClient = createClient(getContentfulConfig())
