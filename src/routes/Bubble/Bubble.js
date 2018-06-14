/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/14
 * Time : 21:47
 * Desc :
 */
import React from 'react';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';
import CreateBubble from '../../components/Form/form_bubble';

(function(){
  let ajax = new XMLHttpRequest();
  ajax.open('post','http://bubble.applinzi.com/public/index.php/api/index/getDataAndWeather');
  ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  ajax.send();
  ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200) {
      let result = JSON.parse(ajax.response);
      if(result.errcode === "OK") {
        let data = result.data[0];
        sessionStorage.cur_date = data.data.replace(/(\d{4})-(\d{2})-(\d{2})/g,'$1年$2月$3日');
        sessionStorage.cur_date_b = data.data;
        sessionStorage.cur_week = data.week;
        sessionStorage.cur_weather = data.weather;
      }else{
        Toast.fail(`获取天气信息失败`, 2);
      }
    }
  }
})();

function createBubble() {
  return (
      <CreateBubble />
  );
}

createBubble.propTypes = {
};

export default connect()(createBubble);
