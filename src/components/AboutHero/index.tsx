import React from 'react'
import { Document as ContentfulDocument } from '@contentful/rich-text-types'
import ContentfulRichTextRenderer from '@/src/components/ContentfulRichTextRenderer'

interface AboutHeroProps {
  title: string
  name: string
  imgResource: string
  experienceTextBlock: ContentfulDocument
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title,
  name,
  imgResource,
  experienceTextBlock,
}) => {
  return (
    <div className='relative isolate -z-10 overflow-hidden bg-gradient-to-b'>
      <div
        className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]  shadow-xl shadow-brand-blue/10 ring-1 ring-brand-lightblue sm:-mr-80 lg:-mr-96'
        aria-hidden='true'
      />
      <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                {name}
              </h1>
              <p className='text-base font-semibold leading-7 text-indigo-600'>
                {title}
              </p>
            </div>
          </div>
          <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
            <ContentfulRichTextRenderer
              richTextDocument={experienceTextBlock}
            />
          </div>
          <img
            src={imgResource}
            alt=''
            className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
          />
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 -z-10 h-24 sm:h-32' />
    </div>
  )
}

export default AboutHero
