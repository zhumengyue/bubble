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
  let { nickname, sex = 0, subtime, likenum, replynum, content, imgurl, islike, itemClick, itemLikeClick } = props;

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
    const lefttext = subtime;
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
          {title(nickname,sex)}
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
