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
import CommentItem from '../../components/CommentItem';

// 回复测试
const test = [
  {
    "rid": 4,
    "bid": 1,
    "puid": 1,
    "pnickname": "xzfff",
    "uid": 1,
    "nickname": "楼主",
    "gender": 1,
    "content": "不咋地",
    "createtime": "2018-06-14 10:05:25"
  },
  {
    "rid": 5,
    "bid": 1,
    "puid": 1,
    "pnickname": "",
    "uid": 1,
    "nickname": "楼主",
    "gender": 1,
    "content": "不咋地",
    "createtime": "2018-06-14 10:04:52"
  },
  {
    "rid": 3,
    "bid": 1,
    "puid": 1,
    "pnickname": "楼主",
    "uid": 1,
    "nickname": "楼主",
    "gender": 0,
    "content": "不咋地",
    "createtime": "2018-06-14 09:13:15"
  }
]

const DetailCard =(props) => {
  const { likenum, createtime, weather, islike,
          nickname, content, imgurl, topic,reply } = props;


  const comItem = reply.map(item => {
    return <CommentItem {...item}/>
  } )
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
          <div style={{paddingLeft: '1.5rem',fontWeight: 'bold'}}>{reply.length === 0 ? '' : `评论 ${reply.length}`}</div>
          {comItem}
          <WhiteSpace size='xl'/>
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
