/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 16:28
 * Desc : 简略信息卡片组件 BriefCard
 */

import React from 'react';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import styles from './BriefCard.css';

const BriefCard = (props) => {
  let { nickname, gender, likenum, replynum, content, createtime, imgurl, islike, itemClick, itemLikeClick } = props;

  // let subtime = props.subtime ? props.subtime : props.createtime;

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

  const title = (nickname,sex) => {
    return (
      <div className={styles.header}>
        {nickname}&nbsp;{
        sex === 0 ?
          <img src={require('../../assets/man.png')} className={styles.seximg} alt=''/> :
          <img src={require('../../assets/woman.png')} className={styles.seximg} alt=''/>}
      </div>
    )
  }

  const imgarea = () => {
    if (imgurl)
      return <img src={imgurl} alt='' style={{width:80,height:80}}/>
    return ''
  }

  const footerextra = liked =>
     <img src={liked === 0 ? require('../../assets/like.png') : require('../../assets/liked.png')} className={styles.likeimg} onClick={()=>itemLikeClick(props)} alt=''/>

  const footercontent = (likenum,relplynum) => {
    const lefttext = calculate(createtime);
    const liketext = like => like === 0 ? '' : ` · ${like} 喜欢`;
    const commenttext = relplynum => relplynum === 0 ? '' : ` · ${relplynum} 评论`;
    return(
      lefttext + liketext(likenum) + commenttext(relplynum)
    )
  }

  return(
    <WingBlank size="lg">
      <Card>
        <Card.Body onClick={()=>itemClick(props)}>
          {title(nickname,gender)}
          <p className={styles.content}>{content}</p>
          {imgarea()}
        </Card.Body>
        <Card.Footer className={styles.footer} content={footercontent(likenum,replynum)} extra={footerextra(islike)} />
      </Card>
      <WhiteSpace size="sm" />
    </WingBlank>
  )
}

export default BriefCard;
