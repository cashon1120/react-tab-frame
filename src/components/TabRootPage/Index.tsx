import React from 'react'
import TabPage from '../TabPage'
import {flatRoutes} from './utils'
import routes from '../../../config/routes'
import type {SubPage, RootPage} from '../interface'

const routesObj = flatRoutes(routes, {})

/**
 * @updateFromTabPage 点击tab标签时不走 getDerivedStateFromProps
*/
let updateFromTabPage = false

interface IProps {
  children: any
}

interface IState {
  rootPages: RootPage,
  activeParentPath: string,
  activeSubPagePath: string
}
/**
 * @pages 存放已打开的路由信息
 * 其格式为: pages: {name: '/根路由1', routes: [{name: '/子路由1', children: ReactElement}, ...]}
*/
// 页面rootPages的更新都是基于下面这个pages的, 在外面去修改方便一点
const pages: RootPage = {} as RootPage

// 获取父路由的pathname, 根据路由配置可看出, 如果parentPath 为 '/' 的话其实为布局路由, 不作处理
const getParentPathName = (pathname: string) => {
  const {parentPath} = routesObj[pathname]
  return parentPath === '/' ? null : parentPath
}

// 设置激活路由
const setActiveSubPage = (rootPath: string, subPageName: string) => {
  const {length} = pages[rootPath].routes
  for(let i = 0; i < length; i += 1){
    const item = pages[rootPath].routes[i]
    if(item.name === subPageName){
      item.active = true
    }else{
      item.active = false
    }
  }
  return pages
}

const updatePages = (pathname: string, children: any) => {
  const parentPath =  getParentPathName(pathname)
  const rootPath = parentPath || pathname
  const newPage: SubPage = {
    name: pathname,
    children,
    active: true
  }
  if(!pages[rootPath]){
    pages[rootPath] = {
      name: parentPath,
      routes: []
    }
    pages[rootPath].routes.push(newPage)
  }else{
    const subPageName = children.props.location.pathname
    const hasPage = pages[rootPath].routes.filter((subPage: RootPage) => subPage.name === subPageName)
    if(hasPage.length === 0){
      pages[rootPath].routes.push(newPage)
    }
    setActiveSubPage(rootPath, subPageName)
  }

  Object.keys(pages).forEach((key: string) => {
    if(key === rootPath){
      pages[key].active = true
    }else{
      pages[key].active = false
    }
  })

  return pages

}

class TabRootPage extends React.Component<IProps, IState>{
  constructor(props: IProps){
    super(props)
    this.state = {
      rootPages: {} as RootPage,
      activeParentPath: '',
      activeSubPagePath: ''
    }
  }

  componentDidMount(){
    const {pathname} = this.props.children.props.location
    updatePages(pathname, this.props.children)
    // 第一次进入页面主动setState一次, 触发更新, firstUpdate这个属性其实没什么用
    this.setState({
      rootPages: pages
    })
  }

  static getDerivedStateFromProps(nextProps: IProps){
    if(updateFromTabPage){
      return null
    }
    if(nextProps.children){
      const {pathname} = nextProps.children.props.location
      const newPages = updatePages(pathname, nextProps.children)
      return {rootPages: newPages}
    }
    return null
  }

  onTabClick = (rootName: string, pageName: string) => {
    updateFromTabPage = true
    const newsPages = setActiveSubPage(rootName, pageName)
    this.setState({
      rootPages: newsPages
    }, () => {
      updateFromTabPage = false
    })
  }

  render(){
    const {rootPages} = this.state
    return<>
    {Object.keys(rootPages).map((key: string) => <div key={key} style={{display: rootPages[key].active ? 'block' : 'none'}}>
        <TabPage
          routes={rootPages[key].routes}
          rootName={rootPages[key].name}
          handleTabClick={this.onTabClick}
        />
      </div>)}
    </>
  }
}

export default TabRootPage
