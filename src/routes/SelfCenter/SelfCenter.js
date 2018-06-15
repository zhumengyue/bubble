/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/14
 * Time : 19:10
 * Desc :
 */
import React from 'react';
import { connect } from 'dva';
import styles from './SelfCenter.css';
import { Tabs, Badge, WhiteSpace, Toast, List } from 'antd-mobile';
import BriefComment from "../../components/CommentItem/BriefComment";
import BriefCard from '../../components/BriefCard';

const tabs = [
  { title: '消息'},
  { title: '我的' },
  { title: '喜欢' },
  { title: '设置' },
];

const Item = List.Item;

const SelfCenter = ({main,dispatch}) => {

  //TODO 卡片点击
  const itemClick = (e) => {
    dispatch({type: 'detail/getArticle',payload: e})
  }

  //TODO 右下角喜欢点击
  const itemLikeClick = (e) => {
    dispatch({
      type:'main/likeClick',
      payload: e,
    })
  }

  const Items = main.reply ?
    main.reply.map(item => {
      return <BriefComment {...item}/>
    })
    : '';

  const MyBubble = main.myBubble ?
    main.myBubble.map(item => {
      return <BriefCard {...item} itemClick={itemClick} itemLikeClick={itemLikeClick}/>
    })
    : '';

  const LikeBubble = main.likeBubble ?
    main.likeBubble.map(item => {
      return <BriefCard {...item} itemClick={itemClick}  itemLikeClick={itemLikeClick}/>
    })
    : '';

  const delLogin = () => {
    dispatch({
      type: 'main/dellogin'
    })
  }

  return (
    <div className={styles.bg}>
      <div className={styles.jump}>
        <a href="../#/main" className={styles.jump_img}><img src={require('../../assets/down.png')} alt=""/></a>
      </div>
      <Tabs tabs={tabs}
            initialPage={0}
            className={styles.tab}
      >
        <div className={styles.sub} >
          <WhiteSpace size='xl'/>
          {Items}
          <WhiteSpace size='xl'/>
          <WhiteSpace size='xl'/>
          <WhiteSpace size='xl'/>
          <WhiteSpace size='xl'/>
        </div>
        <div className={styles.sub}>
          <WhiteSpace size='xl'/>
          {MyBubble}
          <WhiteSpace size='xl'/>
          <WhiteSpace size='xl'/>
          <WhiteSpace size='xl'/>
          <WhiteSpace size='xl'/>
        </div>
        <div className={styles.sub}>
          <WhiteSpace size='xl'/>
          {LikeBubble}
          <WhiteSpace size='xl'/>
          <WhiteSpace size='xl'/>
          <WhiteSpace size='xl'/>
          <WhiteSpace size='xl'/>
        </div >
        <div className={styles.sub}>
          <WhiteSpace size='xl'/>
          <List>
            <Item className={styles.subitem} extra='叶一'>设置评论昵称</Item>
            <WhiteSpace size='xl'/>
            <Item>修改密码</Item>
            <WhiteSpace size='xl'/>
            <Item>检查更新</Item>
            <WhiteSpace size='xl'/>
            <Item onClick={delLogin}>退出登录</Item>
          </List>
          <WhiteSpace size='xl'/>
        </div >
      </Tabs>
      <WhiteSpace />

    </div>
  );
}


export default connect(({main})=>({main}))(SelfCenter);
