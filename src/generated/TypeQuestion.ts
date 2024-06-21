import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeQuestion'
 * @name TypeQuestionFields
 * @type {TypeQuestionFields}
 * @memberof TypeQuestion
 */
export interface TypeQuestionFields {
    /**
     * Field type definition for field 'questionPrompt' (Question Prompt)
     * @name Question Prompt
     * @localized false
     * @summary The question Prompt. i.e. How do I receive Payment? 
     */
    questionPrompt: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'answer' (Answer )
     * @name Answer 
     * @localized false
     * @summary Answer to question Prompt 
     */
    answer?: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'question' (Question)
 * @name TypeQuestionSkeleton
 * @type {TypeQuestionSkeleton}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-21T14:19:06.780Z
 * @version 1
 */
export type TypeQuestionSkeleton = EntrySkeletonType<TypeQuestionFields, "question">;
/**
 * Entry type definition for content type 'question' (Question)
 * @name TypeQuestion
 * @type {TypeQuestion}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-21T14:19:06.780Z
 * @version 1
 */
export type TypeQuestion<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeQuestionSkeleton, Modifiers, Locales>;

export function isTypeQuestion<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeQuestion<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'question'
}
