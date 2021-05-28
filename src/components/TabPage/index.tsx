
import React, {useState} from 'react'
import tabHistory from '../TabRootPage/history'
import {CloseOutlined} from '@ant-design/icons';
import styles from './index.less'
import type {SubPage} from '../interface'

interface IProps {
  routes: SubPage[]
  rootPath: string
  handleClose: (rootPath: string, subPath: string, prePath: string) => void
}

/**
 * TabPage tab显示组件
*/

const TabPage = (props: IProps) => {
  const {routes} = props

  const [currentPath, setCurrentPath] = useState<string>('')

  const handleTabClick = (pageName: string) => {
    window.history.replaceState(null, '', pageName)
    setCurrentPath(pageName)
  }

  const activeSubPagePath = window.location.pathname || currentPath

  const onClose = (e: React.SyntheticEvent, path: string) => {
    const locatonPath = window.location.pathname
    e.stopPropagation()
    const {handleClose, rootPath} = props
    if(path === locatonPath){
      tabHistory.back()
    }
    handleClose(rootPath, path, locatonPath)
  }
  console.log(routes)
  console.log(activeSubPagePath)
  return <>
  {routes.length > 1 ? <ul className={styles.tabUl}>
    {routes.map((page: SubPage) => <li
        onClick={() => {handleTabClick(page.name)}}
        className={page.name === activeSubPagePath ? styles.active : ''} key={page.name}>
        {page.name}
        <i onClick={(e) => onClose(e, page.name)}><CloseOutlined style={{fontSize: 10}} /></i>
      </li>)
    }
    </ul> : null}
    {/* 这里的style可能需要根据需求自行处理 */}
    <div style={{marginTop: routes.length === 1 ? 0 : 24}}>
      {routes.map((page: SubPage) => <div style={{display: page.name === activeSubPagePath ? 'block' : 'none'}} key={page.name}>
        {page.children}
      </div>)}
    </div>
  </>
}

export default TabPage
