import { createForm, formShape } from 'rc-form';
import React from 'react';
import styles from './form.css';
import { Button } from 'antd';
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

function successToast(msg) {
    Toast.success(msg, 2);
}
 
function failToast(msg) {
    Toast.fail(msg, 2);
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  static propTypes = {
    form: formShape,
  };
 
  submit = () => {
    this.props.form.validateFields((error, value) => {
      let ajax = new XMLHttpRequest();
      ajax.open('post', 'http://bubble.applinzi.com/public/index.php/api/user/changenickname');
      ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      ajax.send('nickname='+value.username);
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
        <input type="text" {...getFieldProps('username')} value={this.state.value} onChange={this.handleChange} autoFocus placeholder="请输入修改后的昵称"/>
        <Button type="primary" onClick={this.submit}>提交</Button>
      </div>
    );
  }
}
const FormName = createForm()(Form);
export default FormName;