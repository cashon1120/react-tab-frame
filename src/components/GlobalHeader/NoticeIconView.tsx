<<<<<<< HEAD
import React, { Component } from 'react';
=======
import { Component } from 'react';
>>>>>>> 950478c000702456d417136c05d980f349396f18
import type { ConnectProps } from 'umi';
import { connect } from 'umi';
import { Tag, message } from 'antd';
import groupBy from 'lodash/groupBy';
import moment from 'moment';
import type { NoticeItem } from '@/models/global';
import type { CurrentUser } from '@/models/user';
import type { ConnectState } from '@/models/connect';
import NoticeIcon from '../NoticeIcon';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  notices?: NoticeItem[];
  currentUser?: CurrentUser;
  fetchingNotices?: boolean;
  onNoticeVisibleChange?: (visible: boolean) => void;
  onNoticeClear?: (tabName?: string) => void;
} & Partial<ConnectProps>;

class GlobalHeaderRight extends Component<GlobalHeaderRightProps> {
  componentDidMount() {
    const { dispatch } = this.props;

    if (dispatch) {
      dispatch({
        type: 'global/fetchNotices',
      });
    }
  }

  changeReadState = (clickedItem: NoticeItem): void => {
    const { id } = clickedItem;
    const { dispatch } = this.props;

    if (dispatch) {
      dispatch({
        type: 'global/changeNoticeReadState',
        payload: id,
      });
    }
  };

  handleNoticeClear = (title: string, key: string) => {
    const { dispatch } = this.props;
<<<<<<< HEAD
    message.success(`${'清空了'} ${title}`);
=======
    message.success(`${'Emptied'} ${title}`);
>>>>>>> 950478c000702456d417136c05d980f349396f18

    if (dispatch) {
      dispatch({
        type: 'global/clearNotices',
        payload: key,
      });
    }
  };

  getNoticeData = (): Record<string, NoticeItem[]> => {
    const { notices = [] } = this.props;

    if (!notices || notices.length === 0 || !Array.isArray(notices)) {
      return {};
    }

    const newNotices = notices.map((notice) => {
      const newNotice = { ...notice };

      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime as string).fromNow();
      }

      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }

      if (newNotice.extra && newNotice.status) {
        const color = {
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[newNotice.status];
        newNotice.extra = (
          <Tag
            color={color}
            style={{
              marginRight: 0,
            }}
          >
            {newNotice.extra}
          </Tag>
        );
      }

      return newNotice;
    });
    return groupBy(newNotices, 'type');
  };

  getUnreadData = (noticeData: Record<string, NoticeItem[]>) => {
    const unreadMsg: Record<string, number> = {};
    Object.keys(noticeData).forEach((key) => {
      const value = noticeData[key];

      if (!unreadMsg[key]) {
        unreadMsg[key] = 0;
      }

      if (Array.isArray(value)) {
        unreadMsg[key] = value.filter((item) => !item.read).length;
      }
    });
    return unreadMsg;
  };

  render() {
    const { currentUser, fetchingNotices, onNoticeVisibleChange } = this.props;
    const noticeData = this.getNoticeData();
    const unreadMsg = this.getUnreadData(noticeData);
    return (
      <NoticeIcon
        className={styles.action}
        count={currentUser && currentUser.unreadCount}
        onItemClick={(item) => {
          this.changeReadState(item as NoticeItem);
        }}
        loading={fetchingNotices}
<<<<<<< HEAD
        clearText="清空"
        viewMoreText="查看更多"
=======
        clearText="Empty"
        viewMoreText="See more"
>>>>>>> 950478c000702456d417136c05d980f349396f18
        onClear={this.handleNoticeClear}
        onPopupVisibleChange={onNoticeVisibleChange}
        onViewMore={() => message.info('Click on view more')}
        clearClose
      >
        <NoticeIcon.Tab
          tabKey="notification"
          count={unreadMsg.notification}
          list={noticeData.notification}
<<<<<<< HEAD
          title="通知"
          emptyText="你已查看所有通知"
=======
          title="Notification"
          emptyText="You have viewed all notifications"
>>>>>>> 950478c000702456d417136c05d980f349396f18
          showViewMore
        />
        <NoticeIcon.Tab
          tabKey="message"
          count={unreadMsg.message}
          list={noticeData.message}
<<<<<<< HEAD
          title="消息"
          emptyText="您已读完所有消息"
=======
          title="Message"
          emptyText="You have read all messages"
>>>>>>> 950478c000702456d417136c05d980f349396f18
          showViewMore
        />
        <NoticeIcon.Tab
          tabKey="event"
<<<<<<< HEAD
          title="待办"
          emptyText="你已完成所有待办"
=======
          title="To do"
          emptyText="You have completed all to-dos"
>>>>>>> 950478c000702456d417136c05d980f349396f18
          count={unreadMsg.event}
          list={noticeData.event}
          showViewMore
        />
      </NoticeIcon>
    );
  }
}

export default connect(({ user, global, loading }: ConnectState) => ({
  currentUser: user.currentUser,
  collapsed: global.collapsed,
  fetchingMoreNotices: loading.effects['global/fetchMoreNotices'],
  fetchingNotices: loading.effects['global/fetchNotices'],
  notices: global.notices,
}))(GlobalHeaderRight);
