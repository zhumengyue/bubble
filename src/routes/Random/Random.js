/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/14
 * Time : 12:28
 * Desc :
 */
import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import {connect} from 'dva'
import Navbar from '../../components/Navbar';
import styles from './Random.css';

const Random = ({dispatch,main}) => {
  return(
    <div className={styles.wrapper}>
      <Navbar topic='此刻'/>
      <WingBlank>
        <Carousel
          className={styles.carousel}
          cellSpacing={10}
          slideWidth={0.8}
          dots={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        >
          {main.data.map((val, index) => (
            <img className={styles.item} key={index} style={{height: 'auto'}} src='https://os.alipayobjects.com/rmsportal/UXamdIxYSkXfoVo.jpg' />
          ))}
        </Carousel>
      </WingBlank>
    </div>

  )
}

export default connect(({main})=>({main}))(Random);
