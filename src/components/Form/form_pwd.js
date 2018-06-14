import { createForm, formShape } from 'rc-form';
import React from 'react';
import styles from './form.css';
import { Button } from 'antd';
import { Toast } from 'antd-mobile';
function successToast(msg) {
  Toast.success(msg, 2);
}

function failToast(msg) {
  Toast.fail(msg, 2);
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPwd: '',
      newPwd: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  static propTypes = {
    form: formShape,
  };
 
  submit = () => {
    this.props.form.validateFields((error, value) => {
      let ajax = new XMLHttpRequest();
      ajax.open('post', 'http://bubble.applinzi.com/public/index.php/api/user/changepassword');
      ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      ajax.send('oldpassword='+value.oldPwd+'&newpassword='+value.newPwd);
      ajax.onreadystatechange = function() {
        if(ajax.readyState === 4 && ajax.status === 200) {
          let result = JSON.parse(ajax.response);
          if(result.errcode === "OK"){
            successToast(result.errmsg);
          }else{
            failToast(`更改失败！`);
          };
        }
      }
    });
  }
 
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className={styles.nameInput}>
          <input {...getFieldProps('oldPwd')} onChange={this.handleChange} type="password" placeholder="请输入原密码"/>
          <input {...getFieldProps('newPwd')} onChange={this.handleChange} type="password" placeholder="请输入新密码"/>
          <Button type="primary" onClick={this.submit}>修改</Button>
      </div>
    );
  }
}
const FormPwd = createForm()(Form);
export default FormPwd;