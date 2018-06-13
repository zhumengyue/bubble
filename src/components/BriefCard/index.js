/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 16:28
 * Desc : 简略信息卡片组件
 */

import React from 'react';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import styles from './BriefCard.css';

const BriefCard = (props) => {
  const { username, sex, time, like, comment, content, img, liked, onClick,id } = props;

  const title = (username,sex) => {
    return (
      <div className={styles.header}>
        {username}&nbsp;{
        sex === 0 ?
          <img src={require('../../assets/man.png')} className={styles.seximg} alt=''/> :
          <img src={require('../../assets/woman.png')} className={styles.seximg} alt=''/>}
      </div>
    )
  }

  const imgarea = () => {
    switch (img.length) {
      case 0: return '';
      case 1: return <img src={img[0]} alt=''/>
      case 2: return <div><img src={img[0]} alt=''/> <img src={img[0]} alt=''/></div>
      case 3:
      case 4: return <div><img src={img[0]} alt=''/> <img src={img[1]} alt=''/> <img src={img[2]} alt=''/></div>
      default: return '';
    }
  }


  const footerextra = liked =>
    liked === false ? <img src={require('../../assets/like.png')} className={styles.likeimg} alt=''/> : <img src={require('../../assets/liked.png')} className={styles.likeimg} alt=''/>


  const footercontent = (like,comment,time) => {
    const lefttext = calculate(time);
    const liketext = like => like === 0 ? '' : ` · ${like} 喜欢`;
    const commenttext = comment => comment === 0 ? '' : ` · ${comment} 评论`;
    return(
      lefttext + liketext(like) + commenttext(comment)
    )
  }

  const calculate = (date) => {
    date = date.replace(new RegExp(/-/gm) ,"/"); 　　//将所有的'-'转为'/'即可
    const now = new Date(),
          pre = new Date(date);

    let year  = now.getFullYear() - pre.getFullYear(),
        month = now.getMonth() - pre.getMonth(),
        day   = now.getDate() - pre.getDate(),
        hour  = now.getHours() - pre.getHours(),
        min   = now.getMinutes() - pre.getMinutes();


    if(year)
      return `${year} 年前`;
    else if(month)
      return `${month} 个月前`;
    else if(day)
      return `${day} 天前`;
    else if(hour)
      return `${hour} 小时前`;
    else if(min)
      return `${min} 分钟前`;
    else
      return '刚刚'
  }

  return(
    <WingBlank size="lg">
      <Card onClick={()=>onClick(props)}>
        <Card.Body>
          {title(username,sex)}
          <p className={styles.content}>{content}</p>
          {imgarea()}
        </Card.Body>
        <Card.Footer className={styles.footer} content={footercontent(like,comment,time)} extra={footerextra(liked)} />
      </Card>
      <WhiteSpace size="sm" />
    </WingBlank>
  )
}

export default BriefCard;
