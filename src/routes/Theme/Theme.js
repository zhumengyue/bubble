/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 17:55
 * Desc :
 */

import React from 'react';
import { connect }from 'dva';
import BriefCard from '../../components/BriefCard';
import styles from './Theme.css';
import Navbar from '../../components/Navbar';

const Theme = ({dispatch, main}) => {

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

  const writeBubble = () => {
    dispatch({
      type: 'main/toWrite',
    })
  }
  // 卡片 Items
  const Items = main.bubble.map(item => {
    return(
      <BriefCard
        {...item}
        itemClick={itemClick}
        itemLikeClick={itemLikeClick}
      />
    )
  })

  return(
    <div className={styles.wrapper}>
      <Navbar topic= {main.theme[main.tid-1].name + '之海'}/>
      <div className={styles.content}>
        {Items}
      </div>
      <div className={styles.write} onClick={writeBubble}>
        <div className={styles.img}></div>
      </div>
    </div>
  )
}

const View = connect(({main}) => ({main}))(Theme);

export default View;
