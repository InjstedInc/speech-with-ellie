import React from 'react'
import AboutHero from '@/src/components/AboutHero'
import { getAboutPage } from '@/src/lib/services/aboutPage'
import { Asset } from 'contentful'
import { generateUrlResource } from '@/src/lib/utils'
import { Document as ContentfulDocument } from '@contentful/rich-text-types'

export default async function About() {
  const aboutPageContent = await getAboutPage()
  const jobTitle = aboutPageContent.fields.jobTitle as unknown as string
  const name = aboutPageContent.fields.name as unknown as string
  const imgSrc = aboutPageContent.fields.aboutImage as unknown as Asset
  const imgResource = generateUrlResource(imgSrc, '/images/speech.webp')
  const experienceTextBlock = aboutPageContent.fields
    .experienceTextBlock as unknown as ContentfulDocument
  return (
    <main>
      <AboutHero
        title={jobTitle}
        name={name}
        imgResource={imgResource}
        experienceTextBlock={experienceTextBlock}
      />
    </main>
  )
}
