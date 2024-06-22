import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'
import type { TypeServiceSkeleton } from './TypeService'

/**
 * Fields type definition for content type 'TypeServicesPage'
 * @name TypeServicesPageFields
 * @type {TypeServicesPageFields}
 * @memberof TypeServicesPage
 */
export interface TypeServicesPageFields {
  /**
   * Field type definition for field 'pageName' (Page Name)
   * @name Page Name
   * @localized false
   */
  pageName: EntryFieldTypes.Symbol
  /**
   * Field type definition for field 'header' (Header)
   * @name Header
   * @localized false
   * @summary Page Header
   */
  header: EntryFieldTypes.Symbol
  /**
   * Field type definition for field 'subheading' (Subheading )
   * @name Subheading
   * @localized false
   * @summary Advertisement subheading
   */
  subheading: EntryFieldTypes.Symbol
  /**
   * Field type definition for field 'services' (Services)
   * @name Services
   * @localized false
   */
  services?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeServiceSkeleton>
  >
}

/**
 * Entry skeleton type definition for content type 'servicesPage' (Services Page)
 * @name TypeServicesPageSkeleton
 * @type {TypeServicesPageSkeleton}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-22T05:12:20.941Z
 * @version 7
 */
export type TypeServicesPageSkeleton = EntrySkeletonType<
  TypeServicesPageFields,
  'servicesPage'
>
/**
 * Entry type definition for content type 'servicesPage' (Services Page)
 * @name TypeServicesPage
 * @type {TypeServicesPage}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-22T05:12:20.941Z
 * @version 7
 */
export type TypeServicesPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeServicesPageSkeleton, Modifiers, Locales>

export function isTypeServicesPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeServicesPage<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === 'servicesPage'
}
