/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 19:37
 * Desc :
 */
import React from 'react';
import styles from './Navbar.css'
import { Icon } from 'antd-mobile';

const Navbar = (props) => {
  const back = () => {
    window.history.go(-1)
  }
  return(
    <div className={styles.wrapper}>
      <div className={styles.left} onClick={back} ><Icon type="left" /></div>
      <div className={styles.title}>{props.topic}</div>
      <div className={styles.right}>{props.isUser ? '删除' : ''}</div>
    </div>
  )
}

export default Navbar;
