import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

/**
 * Fields type definition for content type 'TypeNavbarMenu'
 * @name TypeNavbarMenuFields
 * @type {TypeNavbarMenuFields}
 * @memberof TypeNavbarMenu
 */
export interface TypeNavbarMenuFields {
  /**
   * Field type definition for field 'title' (Title)
   * @name Title
   * @localized false
   */
  title?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
}

/**
 * Entry skeleton type definition for content type 'navbarMenu' (Navbar Menu)
 * @name TypeNavbarMenuSkeleton
 * @type {TypeNavbarMenuSkeleton}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-19T00:21:43.542Z
 * @version 1
 */
export type TypeNavbarMenuSkeleton = EntrySkeletonType<
  TypeNavbarMenuFields,
  'navbarMenu'
>
/**
 * Entry type definition for content type 'navbarMenu' (Navbar Menu)
 * @name TypeNavbarMenu
 * @type {TypeNavbarMenu}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-19T00:21:43.542Z
 * @version 1
 */
export type TypeNavbarMenu<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeNavbarMenuSkeleton, Modifiers, Locales>

export function isTypeNavbarMenu<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeNavbarMenu<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === 'navbarMenu'
}
