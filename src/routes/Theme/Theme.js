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

  const handleClick = (id) => {
    console.log(id)
  }


  const Items = main.bubble.map(item => {
    return(
      <BriefCard
        {...item}
        key={item.id}
        onClick={handleClick}
      />
    )
  })

  return(
    <div style={{height: '100%',width: '100%'}}>
      {Items}
    </div>
  )
}

const View = connect(({ main }) => ({
  main
}))(Theme);

export default View;
