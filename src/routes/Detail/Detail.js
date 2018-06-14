/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 19:35
 * Desc :
 */
import React from 'react';
import styles from './Detail.css';
import {connect} from 'dva';
import DetailCard from '../../components/DetailCard';

const Detail = ({dispatch,detail}) => {
  let {article} = detail;
  return(
    <div className={styles.wrapper}>
      <div className={styles.bg}></div>
      <DetailCard
        {...article}
      />
    </div>
  )
}

export default connect(({detail})=>({detail}))(Detail);
