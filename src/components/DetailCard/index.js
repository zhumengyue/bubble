/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 10:12
 * Desc : 详细信息卡片组件 DetailCard
 */
import React from 'react';
import Date from '../Date';
import styles from './DetailCard.css';
import Nav from '../../components/Navbar';
import {WingBlank, Button, WhiteSpace} from 'antd-mobile';

const DetailCard =(props) => {
  const { likenum, createtime, weather, islike,
          nickname, content, imgurl, topic } = props;

  return (
    <div className={styles.wrapper}>
      <Nav topic={topic} isUser={false}/>
      <div className={styles.content}>
        <Date createtime={createtime} weather={weather} likenum={likenum}/>
        <div className={styles.middle}>
          <p className={styles.name}>Ta: {nickname}</p>
          <p className={styles.context}>{content}</p>
          <img className={styles.contentimg} src={imgurl} alt='' />
          <WhiteSpace size='xl'/>
          <WhiteSpace size='xl'/>
        </div>
      </div>
      <div className={styles.footer}>
        <Button className={styles.btn} icon={<img src={require('../../assets/comment.png')} alt="" />}>评论</Button>
        <Button className={styles.btn} icon={<img src={islike === 0 ? require('../../assets/like-l.png') : require('../../assets/liked-l.png')} alt="" />}>喜欢</Button>
      </div>
    </div>

  );
}

DetailCard.defaultProps = {
  likenum: 1,
  createtime: '2018-6-11 11:11:11',
  weather: "多云 , 21~32℃",
  islike: 1,
  nickname: 'zmy昵称',
  content: 'some texts ',
  imgurl: 'http://localhost/bubble/public/upload/luo.jpg',
  topic: '此刻'
}

export default DetailCard;
{/*<WingBlank size='lg' className={styles.wrapper}>*/}
{/*</WingBlank>*/}
