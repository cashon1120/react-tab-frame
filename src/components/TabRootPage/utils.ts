import type {IRoutes} from '../../interface'

export const flatRoutes = (arr: IRoutes[], res: IRoutes, parentPath?: string): IRoutes => {
  arr.forEach((item: IRoutes) => {
    if(item.path){
      res[item.path] = {
        ...item,
        parentPath
      }
      if(item.routes){
        flatRoutes(item.routes, res, item.path)
      }
    }
  })
  return res
}
