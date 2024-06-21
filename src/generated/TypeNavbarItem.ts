import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeNavbarItem'
 * @name TypeNavbarItemFields
 * @type {TypeNavbarItemFields}
 * @memberof TypeNavbarItem
 */
export interface TypeNavbarItemFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'urlPath' (URL Path)
     * @name URL Path
     * @localized false
     */
    urlPath?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'parent' (Parent)
     * @name Parent
     * @localized false
     */
    parent?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'order' (Order)
     * @name Order
     * @localized false
     * @summary Order in which navbar item shows up
     */
    order?: EntryFieldTypes.Integer;
    /**
     * Field type definition for field 'children' (children)
     * @name children
     * @localized false
     */
    children?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavbarItemSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'navbarItem' (Navbar Item)
 * @name TypeNavbarItemSkeleton
 * @type {TypeNavbarItemSkeleton}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-18T19:44:06.817Z
 * @version 3
 */
export type TypeNavbarItemSkeleton = EntrySkeletonType<TypeNavbarItemFields, "navbarItem">;
/**
 * Entry type definition for content type 'navbarItem' (Navbar Item)
 * @name TypeNavbarItem
 * @type {TypeNavbarItem}
 * @author 5OiXEZczrkwNqDxdGbbo5o
 * @since 2024-06-18T19:44:06.817Z
 * @version 3
 */
export type TypeNavbarItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavbarItemSkeleton, Modifiers, Locales>;

export function isTypeNavbarItem<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNavbarItem<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'navbarItem'
}
