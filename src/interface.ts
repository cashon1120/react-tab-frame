export interface IRoutes {
  path?: string,
  component?: string,
  name?: string,
  routes?: IRoutes[]
  icon?: string
  redirect?: string
  authority?: string[]
}
