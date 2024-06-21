import { Document as ContentfulDocument } from '@contentful/rich-text-types'

export type FAQType = {
  question: string
  answer: ContentfulDocument
}
