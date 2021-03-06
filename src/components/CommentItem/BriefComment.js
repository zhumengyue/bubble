/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/15
 * Time : 6:58
 * Desc :
 */
import React from 'react';
import styles from './CommentItem.css';
import {connect} from 'dva'

const BriefComment = (props) => {
  const {createtime,gender,content,rcontent,topic,dispatch,type,likenum,replynum,} = props;

  const onItemClick = () => {
    console.log(props)
    dispatch({
      type: 'detail/getArticle',
      payload: {
        bid: props.bid
      }
    })
  }

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
    <div className={styles.swrapper} onClick={onItemClick}>
      {
        type === 'reply' ?

          <div className={styles.stitle}>
            <img className={styles.img} src={gender===0?require('../../assets/comment.png'):require('../../assets/comment-w.png')} alt=""/>
            {calculate(createtime)}有人在 {topic}之海 回复了你
          </div>
         :
          <div className={styles.stitle}>
            <img className={styles.img} src={gender===0?require('../../assets/liked-l.png'):require('../../assets/like-l.png')} alt=""/>
            {calculate(createtime)}有人喜欢了你
          </div>
      }
      <div className={styles.middle}>
        <span className={styles.scontent}>{rcontent}</span>
        <div className={styles.outer}>
          <div className={styles.bubble}>{topic}</div>
          <span className={styles.rcontent}>{content}</span>
          <p className={styles.footer}>{likenum === 0 ? '' : `${likenum} 喜欢`} {replynum === 0 ? '' :( likenum === 0 ? `${replynum} 回复` : `· ${replynum} 回复`)}</p>
        </div>
      </div>
    </div>
  )
}
export default connect(({main})=>({main}))(BriefComment);
