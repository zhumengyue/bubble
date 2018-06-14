/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 14:21
 * Desc :
 */
import React from 'react'
import { connect } from 'dva';
import { InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { getFieldProps } = this.props.form;
    const { dispatch } = this.props;

    const submit = () => {
      this.props.form.validateFields((error, value) => {
        dispatch({type:'main/login',payload:value})
      });
    }

    return (
      <div className={styles.bg}>
        <div className={styles.jump}>
          <a href="" className={styles.jump_img}><img src={require('../../assets/down.png')} alt=""/></a>
        </div>
        <div>
          <InputItem {...getFieldProps('username')} className={styles.input} type='phone'>用户名</InputItem>
          <InputItem {...getFieldProps('password')} className={styles.input} type="password">密码</InputItem>
          <Button type="submit" className={styles.login_login} onClick={submit}>登录</Button>
          <Button type="primay" className={styles.login_login} onClick={this.jumpRegister}>注册</Button>
        </div>
      </div>
    )
  }
}
const LoginForm = createForm()(Login)
export default connect(({main})=>({main}))(LoginForm);
