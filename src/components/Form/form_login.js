import React from 'react';
import styles from './form.css'
import { Button, Alert } from 'antd';
import { Toast } from 'antd-mobile';

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          pwd: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
            [name]: value
        });
       console.log(target,value,name);
        // alert('A name was submitted: ' + this.state.value+this.state.pwd);
    }

  
    handleSubmit(event) {
        let ajax = new XMLHttpRequest();
        ajax.open('post', 'http://bubble.applinzi.com/public/index.php/api/login/okLogin');
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        ajax.send('username='+this.state.value+'&password='+this.state.pwd);
        ajax.onreadystatechange = function() {
            if(ajax.readyState === 4 && ajax.status === 200) {
                let result = JSON.parse(ajax.response);
                if(result.errcode === "OK"){
                    Toast.success(`登录成功！`,2);
                  //登录成功后跳转
                  
                }else{
                  Toast.fail(`用户名或密码错误！`, 2);
                };
            }
        }
      event.preventDefault();
    }

    jumpRegister() {
        //跳转至注册页面

    }
  
    render() {
      return (
          <div>
            <form className={styles.nameInput}>

                <input name="value" type="text" onChange={this.handleChange} autoFocus placeholder="请输入用户名" />
                <input name="pwd" type="password" onChange={this.handleChange} placeholder="请输入密码" />
                <Button type="submit" className={styles.login_login} onClick={this.handleSubmit}>登录</Button>
                <Button type="primay" className={styles.login_login} onClick={this.jumpRegister}>注册</Button>
            </form>
          </div>

      );
    }
  }

  export default LoginForm;