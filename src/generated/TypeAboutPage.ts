import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

/**
 * Fields type definition for content type 'TypeAboutPage'
 * @name TypeAboutPageFields
 * @type {TypeAboutPageFields}
 * @memberof TypeAboutPage
 */
export interface TypeAboutPageFields {
  /**
   * Field type definition for field 'pageName' (Page Name)
   * @name Page Name
   * @localized false
   */
  pageName: EntryFieldTypes.Symbol
  /**
   * Field type definition for field 'jobTitle' (Job Title)
   * @name Job Title
   * @localized false
   */
  jobTitle?: EntryFieldTypes.Symbol
  /**
   * Field type definition for field 'name' (My Name)
   * @name My Name
   * @localized false
   * @summary My Name
   */
  name: EntryFieldTypes.Symbol
  /**
   * Field type definition for field 'experienceTextBlock' (Experience Text Block)
   * @name Experience Text Block
   * @localized false
   * @summary Text Describing Experience
   */
  experienceTextBlock: EntryFieldTypes.RichText
  /**
   * Field type definition for field 'aboutImage' (About Image)
   * @name About Image
   * @localized false
   */
  aboutImage: EntryFieldTypes.AssetLink
}

/**
 * Entry skeleton type definition for content type 'aboutPage' (About Page)
 * @name TypeAboutPageSkeleton
 * @type {TypeAboutPageSkeleton}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-21T21:06:23.862Z
 * @version 11
 */
export type TypeAboutPageSkeleton = EntrySkeletonType<
  TypeAboutPageFields,
  'aboutPage'
>
/**
 * Entry type definition for content type 'aboutPage' (About Page)
 * @name TypeAboutPage
 * @type {TypeAboutPage}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-21T21:06:23.862Z
 * @version 11
 */
export type TypeAboutPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeAboutPageSkeleton, Modifiers, Locales>

export function isTypeAboutPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeAboutPage<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === 'aboutPage'
}
