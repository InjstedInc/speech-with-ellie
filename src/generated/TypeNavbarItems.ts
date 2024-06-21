import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavbarItemSkeleton } from "./TypeNavbarItem";

/**
 * Fields type definition for content type 'TypeNavbarItems'
 * @name TypeNavbarItemsFields
 * @type {TypeNavbarItemsFields}
 * @memberof TypeNavbarItems
 */
export interface TypeNavbarItemsFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'items' (items)
     * @name items
     * @localized false
     */
    items?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavbarItemSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'navbarItems' (Navbar Items Group)
 * @name TypeNavbarItemsSkeleton
 * @type {TypeNavbarItemsSkeleton}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-18T19:45:32.321Z
 * @version 5
 */
export type TypeNavbarItemsSkeleton = EntrySkeletonType<TypeNavbarItemsFields, "navbarItems">;
/**
 * Entry type definition for content type 'navbarItems' (Navbar Items Group)
 * @name TypeNavbarItems
 * @type {TypeNavbarItems}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-18T19:45:32.321Z
 * @version 5
 */
export type TypeNavbarItems<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavbarItemsSkeleton, Modifiers, Locales>;

export function isTypeNavbarItems<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNavbarItems<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'navbarItems'
}
