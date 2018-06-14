/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/14
 * Time : 19:10
 * Desc :
 */
import React from 'react';
import { connect } from 'dva';
// import { Tabs, List, Collapse } from 'antd';
import styles from './SelfCenter.css';
import { Toast } from 'antd-mobile';

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


function SelfCenter() {
  return (
    <div className={styles.bg}>
      <div className={styles.jump}>
        <a href="" className={styles.jump_img}><img src={require('../../assets/down.png')} alt=""/></a>
      </div>
    </div>
  );
}


export default connect()(SelfCenter);
