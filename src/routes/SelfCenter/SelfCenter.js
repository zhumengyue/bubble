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

const tabs = [
  { title: '消息'},
  { title: '我的' },
  { title: '喜欢' },
  { title: '设置' },
];

const Item = List.Item;

const data = [
  {
    content: '检查更新',
    callback() {
      Toast.success(`已是最新版本！`, 2);
    }
  },
  {
    content: '退出登录',
    callback() {
      let ajax = new XMLHttpRequest();
      ajax.open('get','http://bubble.applinzi.com/public/index.php/api/login/delLogin');
      ajax.send();
      ajax.onreadystatechange = function() {
        if(ajax.readyState === 4 && ajax.status === 200) {
          let result = JSON.parse(ajax.response);
          if(result.errcode === "OK") {
            //跳转至登录页
            console.log("跳转至登录页")
          }else{
            Toast.fail(`退出失败`, 2);
          }
        }
      }
    }
  }
];

const SelfCenter = ({main,dispatch}) => {
  const Items = main.reply ?
    main.reply.map(item => {
      return <BriefComment {...item}/>
    })
    : '';
  return (
    <div className={styles.bg}>
      <div className={styles.jump}>
        <a href="../#/main" className={styles.jump_img}><img src={require('../../assets/down.png')} alt=""/></a>
      </div>
      <Tabs tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            className={styles.tab}
      >
        <div className={styles.sub} >
          {Items}
          <WhiteSpace size='xl'/>
        </div>
        <div className={styles.sub}>
          Content of second tab
          <WhiteSpace size='xl'/>
        </div>
        <div className={styles.sub}>
          Content of third tab
          <WhiteSpace size='xl'/>
        </div >
        <div className={styles.sub}>
          <WhiteSpace size='xl'/>
          <List>
            <Item>设置评论昵称</Item>
            <WhiteSpace size='xl'/>
            <Item>修改密码</Item>
            <WhiteSpace size='xl'/>
            <Item>检查更新</Item>
            <WhiteSpace size='xl'/>
            <Item>退出登录</Item>
          </List>
          <WhiteSpace size='xl'/>
        </div >
      </Tabs>
      <WhiteSpace />

    </div>
  );
}


export default connect(({main})=>({main}))(SelfCenter);
