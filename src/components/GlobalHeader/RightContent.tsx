import { Tooltip, Tag } from 'antd';
import type { Settings as ProSettings } from '@ant-design/pro-layout';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import type { ConnectProps } from 'umi';
import { connect, SelectLang } from 'umi';
import type { ConnectState } from '@/models/connect';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
<<<<<<< HEAD
import NoticeIconView from './NoticeIconView';
=======
>>>>>>> 950478c000702456d417136c05d980f349396f18

export type GlobalHeaderRightProps = {
  theme?: ProSettings['navTheme'] | 'realDark';
} & Partial<ConnectProps> &
  Partial<ProSettings>;
<<<<<<< HEAD
=======

>>>>>>> 950478c000702456d417136c05d980f349396f18
const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
<<<<<<< HEAD
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
            value: 'umi ui',
          },
=======
        placeholder="Site Search"
        defaultValue="umi ui"
        options={[
          { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
>>>>>>> 950478c000702456d417136c05d980f349396f18
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
<<<<<<< HEAD
        ]} // onSearch={value => {
        //   //console.log('input', value);
        // }}
      />
      <Tooltip title="使用文档">
=======
        ]}
        // onSearch={value => {
        //   //console.log('input', value);
        // }}
      />
      <Tooltip title="Use documentation">
>>>>>>> 950478c000702456d417136c05d980f349396f18
        <a
          style={{
            color: 'inherit',
          }}
          target="_blank"
          href="https://pro.ant.design/docs/getting-started"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip>
<<<<<<< HEAD
      <NoticeIconView />
      <Avatar menu />
=======
      <Avatar />
>>>>>>> 950478c000702456d417136c05d980f349396f18
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      <SelectLang className={styles.action} />
    </div>
  );
};

export default connect(({ settings }: ConnectState) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
