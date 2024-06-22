import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

/**
 * Fields type definition for content type 'TypeService'
 * @name TypeServiceFields
 * @type {TypeServiceFields}
 * @memberof TypeService
 */
export interface TypeServiceFields {
  /**
   * Field type definition for field 'serviceName' (Service Name)
   * @name Service Name
   * @localized false
   */
  serviceName: EntryFieldTypes.Symbol
  /**
   * Field type definition for field 'timeOrDuration' (Time or Duration)
   * @name Time or Duration
   * @localized false
   */
  timeOrDuration: EntryFieldTypes.Symbol
  /**
   * Field type definition for field 'serviceDescription' (Service Description)
   * @name Service Description
   * @localized false
   * @summary Service
   */
  serviceDescription: EntryFieldTypes.Text
}

/**
 * Entry skeleton type definition for content type 'service' (Service)
 * @name TypeServiceSkeleton
 * @type {TypeServiceSkeleton}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-22T05:17:06.042Z
 * @version 1
 */
export type TypeServiceSkeleton = EntrySkeletonType<
  TypeServiceFields,
  'service'
>
/**
 * Entry type definition for content type 'service' (Service)
 * @name TypeService
 * @type {TypeService}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-22T05:17:06.042Z
 * @version 1
 */
export type TypeService<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeServiceSkeleton, Modifiers, Locales>

export function isTypeService<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeService<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === 'service'
}
