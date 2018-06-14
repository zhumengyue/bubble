import { ImagePicker, WingBlank } from 'antd-mobile';
import { Toast } from 'antd-mobile';
import {connect} from 'dva'
import React from 'react';
import styles from './form.css';

(function(){
  let ajax = new XMLHttpRequest();
  ajax.open('get','/api/user/getUserInfo');
  ajax.send();
  ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200) {
      let result = JSON.parse(ajax.response);
      if(result.errcode === "OK") {
        let data = result.data;
        // sessionStorage.user_name = data.username;
      }
    }
  }
})();

const data = [];

  class CreateBubble extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        files: data,
        value: ''
      }
      this.onContentChange = this.onContentChange.bind(this);
    }

    onChange = (files, type, index) => {
      console.log(files, type, index);
      this.setState({
        files,
      });
    }

    onContentChange(event) {
      this.setState({
        value: event.target.value
      })
    }

    backMain() {
      //返回前一个页面
      window.history.go(-1)
    }

    render() {
      const {dispatch,main} = this.props;
      const { files } = this.state;

      const submit = () => {
        let imgSel = this.state.files[0];
        let imgUrl;
        if(imgSel) {
          imgUrl = imgSel.url;
        }else{
          imgUrl = '';
        }

        dispatch({
          type: 'main/write',
          payload: {
            content: this.state.value,
            date: sessionStorage.cur_date_b,
            weather: sessionStorage.cur_weather,
            imgurl: imgUrl
          }
        })
      }

      return (
        <div className={styles.content}>
            <div className={styles.topbar}>
                  <div className={styles.btn_back} onClick={this.backMain}></div>
                  <button onClick={submit}  className={styles.btn_sub}>完成</button>
              </div>
              <div className={styles.main}>
                  <div className={styles.main_top}>
                      <div className={styles.main_top_date}>{sessionStorage.cur_date}&nbsp;{sessionStorage.cur_week}</div>
                      <div className={styles.main_top_weather}>{sessionStorage.cur_weather}</div>
                  </div>
                  <textarea onChange={this.onContentChange} value={this.state.value} className={styles.main_bubble} autoFocus placeholder="吐露你的心声"/>
                  <div className={styles.main_bottom}>
                    <WingBlank>
                      <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        selectable={files.length < 1}
                      />
                    </WingBlank>
                  </div>
              </div>
      </div>

      );
    }
  }

  export default connect(({main})=>({main}))(CreateBubble);
