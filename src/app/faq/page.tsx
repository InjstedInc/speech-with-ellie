import FAQ from '@/src/components/FAQ'
import { getFaqPage } from '@/src/lib/services/faqPage'
import { TypeQuestionSkeleton } from '@/src/generated'
import { FAQType } from '@/src/components/FAQ/types'
import { Document as ContentfulDocument } from '@contentful/rich-text-types'

export default async function Faq() {
  const faqPageContent = await getFaqPage()
  const header = faqPageContent.fields.header as unknown as string
  const questionList = faqPageContent.fields
    .questions as unknown as TypeQuestionSkeleton[]
  const questions: FAQType[] = questionList.map((question) => {
    return {
      question: question.fields?.questionPrompt as unknown as string,
      answer: question.fields?.answer as unknown as ContentfulDocument,
    }
  })

  return (
    <main>
      <FAQ header={header} questions={questions} />
    </main>
  )
}
