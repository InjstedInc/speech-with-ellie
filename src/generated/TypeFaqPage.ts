import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeQuestionSkeleton } from "./TypeQuestion";

/**
 * Fields type definition for content type 'TypeFaqPage'
 * @name TypeFaqPageFields
 * @type {TypeFaqPageFields}
 * @memberof TypeFaqPage
 */
export interface TypeFaqPageFields {
    /**
     * Field type definition for field 'header' (Header)
     * @name Header
     * @localized false
     * @summary Page Header 
     */
    header: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'questions' (Questions)
     * @name Questions
     * @localized false
     * @summary Questions that will display in FAQ page 
     */
    questions: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeQuestionSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'faqPage' (FAQ Page)
 * @name TypeFaqPageSkeleton
 * @type {TypeFaqPageSkeleton}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-21T14:17:53.579Z
 * @version 3
 */
export type TypeFaqPageSkeleton = EntrySkeletonType<TypeFaqPageFields, "faqPage">;
/**
 * Entry type definition for content type 'faqPage' (FAQ Page)
 * @name TypeFaqPage
 * @type {TypeFaqPage}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-21T14:17:53.579Z
 * @version 3
 */
export type TypeFaqPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFaqPageSkeleton, Modifiers, Locales>;

export function isTypeFaqPage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeFaqPage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'faqPage'
}
