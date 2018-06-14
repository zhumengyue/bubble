/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 10:33
 * Desc : 评论 item 组件
 */

import React from 'react';
import {} from 'antd-mobile';
import styles from './CommentItem.css';

const CommentItem = (props) => {
  const {createtime,gender,content,nickname,pnickname,replyClicked} = props;

  const calculate = (time) => {
    time = time.replace(new RegExp(/-/gm),"/");
    const now = new Date(), pre = new Date(time);

    let y = now.getFullYear()-pre.getFullYear(),
        mon = now.getMonth()-pre.getMonth(),
        d = now.getDate()-pre.getDate(),
        h = now.getHours()-pre.getHours(),
        min = now.getMinutes()-pre.getMinutes();

    if(y) return `${y} 年前`
    else if(mon) return `${mon} 个月前`
    else if(d) return `${d} 天前`
    else if(h) return `${h} 小时前`
    else if(min) return `${min} 分钟前`
    else return '刚刚'
  }

  return(
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <img className={styles.img} src={gender===1?require('../../assets/comment.png'):require('../../assets/comment-w.png')} alt=""/>
          {nickname} 回复 {pnickname}
        </div>
        <p className={styles.content}>{content}</p>
        <div className={styles.time}>{calculate(createtime)} <a onClick={()=>replyClicked(props)}>回复</a></div>
      </div>
  )
}
export default CommentItem;
