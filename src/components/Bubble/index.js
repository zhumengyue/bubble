/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 12:18
 * Desc : 气泡组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bubble.css';

const Bubble = ({name, id, onClick}) => {
  return(
    <div className={styles.wrapper} id={id} onClick={onClick}>
      {name}
    </div>
  )
}

Bubble.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
export  default Bubble;
