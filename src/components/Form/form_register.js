import React from 'react';
import styles from './form.css'
import { Button } from 'antd';
import { List, Radio } from 'antd-mobile'
const RadioItem = Radio.RadioItem;

class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          phone: '',
          pwd: '',
          name: '',
          gender: 0
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
    }

  
    handleSubmit(event) {
      console.log('A name was submitted: ' + this.state);
      event.preventDefault();
    }

    getCheckNum() {
        //获取验证码
        console.log(this.state.phone);
    }

    onChange = (value) => {
        console.log('checkbox');
        this.setState({
          gender: value
        });
      };
  
    render() {

      return (
          <div>
            <form onSubmit={this.handleSubmit} className={styles.nameInput}>
                <input type="text" name="phone" onChange={this.handleChange} autoFocus placeholder="注册手机号" />
                <input type="password" className={styles.form_phone} onChange={this.handleChange} placeholder="手机验证码" />
                <Button type="primary" onClick={this.getCheckNum} className={styles.form_getNum}>获取验证码</Button>
                <input type="password" name="pwd" onChange={this.handleChange} placeholder="注册密码" />
                <input type="text" name="name" onChange={this.handleChange} placeholder="注册昵称" />
                <input type="radio" name="gender" value="0" className={styles.form_gender} onChange={this.handleChange} checked/>男
                <input type="radio" name="gender" value="1" className={styles.form_gender} onChange={this.handleChange} />女
                <Button type="submit" className={styles.login_login}>注册</Button>
            </form>
          </div>

      );
    }
  }

  export default RegisterForm;