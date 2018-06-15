import React from 'react';
import { connect } from 'dva';
import styles from './Main.css';
import { Flex } from 'antd-mobile';
import Bubble from '../../components/Bubble';
import {Badge} from 'antd-mobile'

const Main = ({dispatch, main}) => {

  const handleClick = (id) => {
    // todo bubble点击响应
    console.log(id)
    dispatch({type: 'main/itemclick', payload: {tid: id}})
  }

  const randomClick = () => {
    // todo '遇见' 点击响应
    dispatch({type: 'main/toRandom'})
  }

  const selfClick = () => {
    // todo 个人中心
    dispatch({type: 'main/toSelf'})
  }

  const nowClick = () => {
    // todo '此刻' 点击响应
    dispatch({type: 'main/toWrite'})
  }

  const Items = main.theme.map(item => {
    return(
      <Bubble className={styles.item} name={item.name} id={item.tid} key={item.tid} onClick={() => handleClick(item.tid)} />
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
          <div className={styles.left} onClick={randomClick}>
            {/*<img src={require('../../assets/Smile.png')}/>*/}
          </div>
          {
            main.isNoRead ?
              <Badge text={main.noReadNum} className={styles.middle}><img onClick={selfClick} src={require('../../assets/btn-p.png')}/></Badge>
              : <img onClick={selfClick} className={styles.middle} src={require('../../assets/btn.png')}/>
          }

          <div className={styles.right} onClick={nowClick}>
            {/*<img src={require('../../assets/note.png')}/>*/}
          </div>
        </div>
    </div>
  )
}
const View = connect(({main})=>({main}))(Main)
export {View};
