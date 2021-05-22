
import React from 'react'
import styles from './index.less'
import type {SubPage} from '../interface'

interface IProps {
  routes: SubPage[]
  rootName: string
  handleTabClick: (rootName: string, pageName: string) => void
}

class TabPage extends React.Component<IProps>{
  render(){
    const {routes, handleTabClick, rootName} = this.props
    return <>
    {routes.length === 0 ? routes[0].children :
      <>
        <ul className={styles.tabUl}>
          {routes.map((page: SubPage) => <li
            onClick={() => {handleTabClick(rootName, page.name)}}
            className={page.active ? styles.active : ''} key={page.name}>
            {page.name}
          </li>)}
        </ul>
        <div>
          {routes.map((page: SubPage) => <div style={{display: page.active ? 'block' : 'none'}} key={page.name}>{page.children}</div>)}
        </div>
      </>
    }
    </>
  }
}

export default TabPage
