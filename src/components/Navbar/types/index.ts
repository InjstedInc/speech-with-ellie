export interface NavbarItem {
  title: string
  urlPath: string
  parent?: string
  order?: number
  children?: NavbarItem[]
}
