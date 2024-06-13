import { createClient, CreateClientParams } from 'contentful'
import ContentfulConfigError from '@/src/lib/contentful/error/ContentfulConfigError'

function getContentfulConfig(): CreateClientParams {
  const space = process.env.CONTENTFUL_SPACE
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  if (!space || !accessToken) {
    throw new ContentfulConfigError(
      `The \`${!space ? 'CONTENTFUL_SPACE' : 'CONTENTFUL_ACCESS_TOKEN'}\` environment variable is required to connect to Contentful`,
    )
  }
  return { space, accessToken }
}

export const contentfulClient = createClient(getContentfulConfig())
