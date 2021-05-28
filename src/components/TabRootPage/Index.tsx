import React, {useState} from 'react'
import TabPage from '../TabPage'
import tabHistory from './history'
import {flatRoutes} from './utils'
import routes from '../../../config/routes'
import type {SubPage, RootPage} from '../interface'

const routesObj = flatRoutes(routes, {})
// 获取父路由的pathname, 根据路由配置可看出, 如果parentPath 为 '/' 的话其实为布局路由, 不作处理
const getParentPathName = (pathname: string) => {
  if(routesObj[pathname]){
    const {parentPath} = routesObj[pathname]
    return parentPath === '/' ? null : parentPath
  }
}

interface OpenPage {
  pages: string[]
  pushPages: (path: string) => void
  includePage: (path: string) => boolean
  deletePage: (path: string) => void
}

const opendedPages: OpenPage = {
  pages: [],
  pushPages(path: string){
    if(!this.pages.includes(path)){
      this.pages.push(path)
    }
  },
  includePage(path: string){
    return this.pages.includes(path)
  },
  deletePage(path: string){
    this.pages.forEach((item: string, index: number) => {
      if(item === path){
        this.pages.splice(index, 1)
      }
    })
  }
}



/**
 * @rootPages 存放已打开的路由信息
 * 其格式为: pages: {name: '/根路由1', routes: [{name: '/子路由1', children: ReactElement}, ...]}
*/
const rootPages: RootPage = {} as RootPage

/*
 * TabRootPage 控制已打开路由的信息
*/
const TabRootPage: React.FC = (props: any) => {

  const [prePage, setPrePage] = useState('')


  const updatePages = (children: any) => {
    const {pathname} = window.location
    const parentPath =  getParentPathName(pathname)
    const rootPath = parentPath || pathname
    opendedPages.pushPages(pathname)
    const newPage: SubPage = {
      name: pathname,
      children,
    }
    if(!rootPages[rootPath]){
      rootPages[rootPath] = {
        name: parentPath,
        routes: []
      }
      rootPages[rootPath].routes.push(newPage)
    }else{
      const subPageName = window.location.pathname
      const hasPage = rootPages[rootPath].routes.filter((subPage: RootPage) => subPage.name === subPageName)
      if(hasPage.length === 0){
        rootPages[rootPath].routes.push(newPage)
      }
    }
  }

  if(!opendedPages.includePage(window.location.pathname)){
    updatePages(props.children)
  }
  const activeParentPath = getParentPathName(window.location.pathname)


  const handleClose = (rootPath: string, subPath: string, prePath: string) => {
    rootPages[rootPath].routes.forEach((page: SubPage, index: number) => {
      if(page.name === subPath){
        rootPages[rootPath].routes.splice(index, 1)
      }
    })
    setTimeout(() => {
      opendedPages.deletePage(subPath)
      tabHistory.deleteState(subPath)
    }, 0);
    setPrePage(prePath)
  }

  tabHistory.pushState(window.location.pathname)
  // console.log(rootPages)
  return <>
    {Object.keys(rootPages).map((key: string) => <div key={key} style={{display: rootPages[key].name === activeParentPath ? 'block' : 'none'}}>
        <TabPage
          routes={rootPages[key].routes}
          rootPath={rootPages[key].name}
          handleClose={handleClose}
        />
      </div>)}
    </>
}

export default TabRootPage
