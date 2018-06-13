/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 10:12
 * Desc : 详细信息卡片组件
 */
import React from 'react';
import Date from '../Date';
import styles from './DetailCard.css';
import {Card, WingBlank} from 'antd-mobile';

const DetailCard =(props) => {
  let { like } = props;
  like = 1;
  const Title = <Date
    date='2018-6-11 11:11:11'
    lowtem={13}
    hightem={22}
    weather='晴'
  />

  return (
    <WingBlank size='lg'>
      <Card>
        <Card.Header
          className={styles.header}
          title={Title}
          extra={like === 0 ? '' : `${like} 喜欢`}
        />
        <Card.Body>
          
        </Card.Body>
      </Card>
    </WingBlank>
  );
}


export default DetailCard;
