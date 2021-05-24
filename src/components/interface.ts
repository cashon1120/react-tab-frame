export interface SubPage {
  name: string
  children: any
  active?: boolean
}

export interface RootPage {
  name: string
  routes: SubPage[],
  active?: boolean
}
