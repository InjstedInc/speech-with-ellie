import React from 'react'
import HeroSVG from '@/src/components/Hero/assets/HeroSVG'
import Link from 'next/link'
import { Document as ContentfulDocument } from '@contentful/rich-text-types'
import ContentfulRichTextRenderer from '@/src/components/ContentfulRichTextRenderer'

interface HeroProps {
  headerMessage: string
  shortBio: ContentfulDocument
  imgResource: string
}

const Hero: React.FC<HeroProps> = ({
  headerMessage,
  shortBio,
  imgResource,
}) => {
  return (
    <div className='relative'>
      <div className='mx-auto max-w-7xl'>
        <div className='relative z-10  lg:w-full lg:max-w-2xl'>
          <HeroSVG />
          <div className='relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl'>
              <div className='hidden sm:mb-10 sm:flex'></div>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                {headerMessage}
              </h1>
              <ContentfulRichTextRenderer richTextDocument={shortBio} />
              <div className='mt-10 flex items-center gap-x-6'>
                <Link
                  href='#'
                  className='rounded-md bg-brand-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blueish focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get in touch
                </Link>
                <Link
                  href='#'
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  Learn more <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-transparent lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full rounded-r-lg'
          src={imgResource}
          alt=''
        />
      </div>
    </div>
  )
}

export default Hero
