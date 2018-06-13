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
import Nav from '../../components/Navbar';
import DetailCard from '../../components/DetailCard';

const Detail = ({dispatch,detail}) => {

  let {article} = detail;
  return(
    <div className={styles.wrapper}>
      <Nav topic={article.topic} isUser={false}/>
      <DetailCard
        {...article}
      />
    </div>
  )
}

export default connect(({detail})=>({detail}))(Detail);
