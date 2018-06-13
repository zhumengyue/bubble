/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 10:33
 * Desc : 卡片组件左上角日期详情（日期+天气）
 */
import React from 'react';
import styles from './Date.css';

const DateRec = (props) => {

  const { date, lowtem, hightem, weather, like } = props;
  const weekday = ['天','一','二','三','四','五','六'];

  let datet = new Date(date.replace(new RegExp(/-/gm) ,"/")); 　　//将所有的'-'转为'/'即可
  let day = datet.getDate(),
      month = datet.getMonth(),
      year = datet.getFullYear(),
      week = weekday[datet.getDay()];

  return(
    <div className={styles.wrapper}>
      <div className={styles.day}>
        {day}
      </div>
      <div className={styles.right}>
        <div>{year}年{month}月 , 星期{week}</div>
        <div>{weather} , {lowtem}~{hightem}℃</div>
      </div>
    </div>
  )
}

export default DateRec;
