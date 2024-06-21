import Hero from '@/src/components/Hero'
import { getLandingPage } from '@/src/lib/services/homePage'
import { TypeLandingPageFields } from '@/src/generated'
import { Document as ContentfulDocument } from '@contentful/rich-text-types'
import type { Asset } from 'contentful'
import { generateUrlResource } from '@/src/lib/utils'

export default async function Home() {
  const landingPageContent = await getLandingPage()
  const fields = landingPageContent.fields as unknown as TypeLandingPageFields
  const headerMessage = fields.header as unknown as string
  const shortBio = fields.shortBio as unknown as ContentfulDocument
  const imgSrc = fields.image as unknown as Asset
  const imgResource = generateUrlResource(imgSrc, '/images/speech.webp')
  return (
    <main>
      <Hero
        headerMessage={headerMessage}
        shortBio={shortBio}
        imgResource={imgResource}
      />
    </main>
  )
}
