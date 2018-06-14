import { ImagePicker, WingBlank } from 'antd-mobile';
import { Toast } from 'antd-mobile';
import React from 'react';
import styles from './form.css';

(function(){
  let ajax = new XMLHttpRequest();
  ajax.open('get','http://bubble.applinzi.com/public/index.php/api/user/getUserInfo');
  ajax.send();
  ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200) {
      let result = JSON.parse(ajax.response);
      if(result.errcode === "OK") {
        let data = result.data;
        // sessionStorage.user_name = data.username;
        console.log(result);
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

    submit = () => {
      let ajax = new XMLHttpRequest();
      let imgSel = this.state.files[0];
      let imgUrl;
      if(imgSel) {
        imgUrl = imgSel.url;
      }else{
        imgUrl = '';
      }
      ajax.open('post', 'http://bubble.applinzi.com/public/index.php/api/bubble/sendMyBubble');
      ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      ajax.send('tid=1&nickename=15999671690&date='+sessionStorage.cur_date+'&weather='+sessionStorage.cur_weather+'&content='+this.state.value+'&imgurl='+imgUrl);
      ajax.onreadystatechange = function() {
          if(ajax.readyState === 4 && ajax.status === 200) {
              let result = ajax.response;
              if(result.errcode === "OK"){
              }else{
              };
          }
      }
    }

    backMain() {
      //返回前一个页面
    }
  
  
    render() {
      const { files } = this.state;
      return (
        <div className={styles.content}>
          <form onSubmit={this.submit}>
            <div className={styles.topbar}>
                  <div className={styles.btn_back} onClick={this.backMain}></div>
                  <button type="submit" className={styles.btn_sub}>完成</button>
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
                        // onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 1}
                      />
                    </WingBlank>
                  </div>
              </div>
          </form>
          
      </div>
        
      );
    }
  }

  export default CreateBubble;