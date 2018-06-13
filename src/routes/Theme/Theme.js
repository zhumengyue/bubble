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

const Theme = ({dispatch, main}) => {

  //TODO 卡片点击
  const itemClick = (e) => {
    dispatch({type: 'detail/getArticle',payload: e})
  }

  //TODO 左下角喜欢点击
  const itemLikeClick = (e) => {
    console.log(e)
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
    <div style={{height: '100%',width: '100%'}}>
      {Items}
    </div>
  )
}

const View = connect(({main}) => ({main}))(Theme);

export default View;
