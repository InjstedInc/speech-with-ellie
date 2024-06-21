import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

/**
 * Fields type definition for content type 'TypeLandingPage'
 * @name TypeLandingPageFields
 * @type {TypeLandingPageFields}
 * @memberof TypeLandingPage
 */
export interface TypeLandingPageFields {
  /**
   * Field type definition for field 'header' (Header)
   * @name Header
   * @localized false
   * @summary Home Page Header
   */
  header: EntryFieldTypes.Symbol
  /**
   * Field type definition for field 'shortBio' (Short Bio )
   * @name Short Bio
   * @localized false
   * @summary Hoe Page Welcome Message
   */
  shortBio: EntryFieldTypes.RichText
  /**
   * Field type definition for field 'image' (Home Page Image)
   * @name Home Page Image
   * @localized false
   * @summary Image that displays on Home Page
   */
  image: EntryFieldTypes.AssetLink
}

/**
 * Entry skeleton type definition for content type 'landingPage' (Landing Page)
 * @name TypeLandingPageSkeleton
 * @type {TypeLandingPageSkeleton}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-21T03:19:38.371Z
 * @version 11
 */
export type TypeLandingPageSkeleton = EntrySkeletonType<
  TypeLandingPageFields,
  'landingPage'
>
/**
 * Entry type definition for content type 'landingPage' (Landing Page)
 * @name TypeLandingPage
 * @type {TypeLandingPage}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-21T03:19:38.371Z
 * @version 11
 */
export type TypeLandingPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeLandingPageSkeleton, Modifiers, Locales>

export function isTypeLandingPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeLandingPage<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === 'landingPage'
}
