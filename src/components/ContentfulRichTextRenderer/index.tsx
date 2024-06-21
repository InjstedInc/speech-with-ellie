import React from 'react'
import { BLOCKS, INLINES, Document } from '@contentful/rich-text-types'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'

interface ContentfulRichTextRendererProps {
  richTextDocument: Document
  className?: string
}
import Image from 'next/image'

const ContentfulRichTextRenderer: React.FC<ContentfulRichTextRendererProps> = ({
  richTextDocument,
  className,
}) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <p className={className ? className : ''}>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (_, children) => (
        <h1 className='text-4xl md:text-6xl font-bold my-4'>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (_, children) => (
        <h2 className='text-3xl md:text-5xl font-semibold my-4'>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_, children) => (
        <h3 className='text-2xl md:text-4xl font-semibold my-4'>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (_, children) => (
        <h4 className='text-2xl md:text-3xl font-semibold my-2'>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (_, children) => (
        <h5 className='mt-6 text-xl leading-8 font-medium text-text-primary'>
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (_, children) => (
        <h6 className='text-lg md:text-xl font-semibold my-2'>{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (_, children) => (
        <ul role='list' className='mt-3 space-y-3 text-text-secondary'>
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (_, children) => (
        <ol className='list-decimal list-inside my-4'>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => (
        <li className='flex gap-x-3'>{children}</li>
      ),
      [BLOCKS.QUOTE]: (_, children) => (
        <blockquote className='italic border-l-4 border-gray-500 pl-4 my-4'>
          {children}
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // Assuming your Contentful asset object has fields.file.url and fields.title
        const title = node.data.target.fields.title.en
        const url = node.data.target.fields.file.en.url
        const imageUrl = `https:${url}` // Ensure the URL is HTTPS

        return (
          <div
            className='my-4 mx-auto'
            style={{ position: 'relative', width: '100%', height: 'auto' }}
          >
            <Image
              src={imageUrl}
              alt={title}
              layout='responsive'
              width='100' // You may adjust this as necessary
              height='100' // This should be adjusted based on the aspect ratio of your images
              objectFit='cover'
            />
          </div>
        )
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          className='text-blue-600 hover:text-blue-800 visited:text-purple-600'
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </a>
      ),
      // Add more custom renderings as needed
    },
    // Optionally, customize the rendering of text if needed
  }

  return (
    // <article className='prose lg:prose-lg max-w-none text-left'>
    //   {documentToReactComponents(richTextDocument, options)}
    // </article>
    <>{documentToReactComponents(richTextDocument, options)}</>
  )
}

export default ContentfulRichTextRenderer
