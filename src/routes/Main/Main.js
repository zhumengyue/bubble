import React from 'react';
import { connect } from 'dva';
import styles from './Main.css';
import { Flex } from 'antd-mobile';
import Bubble from '../../components/Bubble';

const Main = ({dispatch, main}) => {

  const handleClick = (id) => {
    // todo bubble点击响应
    dispatch({type: 'main/itemclick', payload: {tid: id}})
  }

  const randomClick = () => {
    // todo '遇见' 点击响应
  }

  const selfClick = () => {
    // todo 个人中心
  }

  const nowClick = () => {
    // todo '此刻' 点击响应
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
        <div className={styles.footer}>
          <div className={styles.left}>
            <img src={require('../../assets/Smile.png')}/>
          </div>
          <img  className={styles.middle} src={require('../../assets/btn.png')}/>
          <div  className={styles.right}>
            <img src={require('../../assets/Note.png')}/>
          </div>
        </div>
    </div>
  )
}
const View = connect(({main})=>({main}))(Main)
export {View};
