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
      <div>
        <InputItem {...getFieldProps('username')} type='phone'>用户名</InputItem>
        <InputItem {...getFieldProps('password')} type="password">密码</InputItem>
        <Button size='small' onClick={submit}>登录</Button>
      </div>
    )
  }
}
const LoginForm = createForm()(Login)
export default connect(({main})=>({main}))(LoginForm);
