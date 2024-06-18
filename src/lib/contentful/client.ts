import { createClient, CreateClientParams } from 'contentful'
import ContentfulConfigError from '@/src/lib/contentful/error/ContentfulConfigError'

function getContentfulConfig(): CreateClientParams {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  console.log('space:', space, 'accessToken:', accessToken)
  if (!space || !accessToken) {
    throw new ContentfulConfigError(
      `The \`${!space ? 'NEXT_PUBLIC_CONTENTFUL_SPACE_ID' : 'NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN'}\` environment variable is required to connect to Contentful`,
    )
  }
  return { space, accessToken }
}

export const contentfulClient = createClient(getContentfulConfig())
