import React from 'react';
import { connect } from 'dva';
import styles from './Main.css';
import { Flex } from 'antd-mobile';
import Bubble from '../../components/Bubble';

const Main = ({dispatch, main}) => {
  const handleClick = (id) => {
    dispatch({type: 'main/itemclick', payload: {tid: id}})
  }

  const Items = main.theme.map(item => {
    return(
      <Bubble name={item.name} id={item.id} key={item.id} onClick={() => handleClick(item.id)} />
    )
  })

  return(
    <div className={styles.bg}>
      <div className={styles["flex-container"]}>
        <Flex justify="between" wrap='wrap'>
          {Items.splice(0,3)}
        </Flex>
        <Flex justify="between" wrap='wrap'>
          {Items.splice(0,3)}
        </Flex>
        <Flex justify="between" wrap='wrap'>
          {Items.splice(0,3)}
        </Flex>
        <Flex justify="between" wrap='wrap'>
          {Items.splice(0,3)}
        </Flex>
        <Flex justify="between" wrap='wrap'>
          {Items.splice(0,3)}
        </Flex>
        <Flex justify="between" wrap='wrap'>
          {Items.splice(0,3)}
        </Flex>

      </div>
    </div>
  )
}
const View = connect(({main})=>({main}))(Main)
export {View};
