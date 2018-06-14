/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 19:35
 * Desc :
 */
import React from 'react';
import styles from './Detail.css';
import {connect} from 'dva';
import DetailCard from '../../components/DetailCard';
import {Modal,Toast,Button, List,InputItem} from 'antd-mobile';
import { createForm } from 'rc-form';

const prompt = Modal.prompt;

class Detail extends React.Component {
// const Detail = ({dispatch,detail}) => {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      payload: {
        bid: '',
        puid: '',
        pnickname: '',
        content: ''
      }
    }
  }

  onClose = () => {
    this.setState({
      modal: false,
    });
  }

  render() {
    const {dispatch, detail} = this.props;
    const { getFieldProps } = this.props.form;
    let {article} = detail;

    const itemLikeClick = () => {
      dispatch({
        type:'detail/changeLike',
        payload: {
          bid: article.bid,
          islike: article.islike,
        },
      })
    }

    const commentClick = (e) => {
      this.setState({payload: {
        bid: article.bid,
        pnickname: '楼主',
        puid: article.uid
        }})
      this.setState({modal:true})
    }

    const replyClick = (e) => {
      console.log(e)
      this.setState({payload: {
          bid: e.bid,
          pnickname: e.nickname,
          puid: e.uid
        }})
      this.setState({modal:true})
    }

    const submit = () => {
      this.props.form.validateFields((error, value) => {
        dispatch({
          type: 'detail/comment',
          payload: {
            content: value.content,
            bid: this.state.payload.bid,
            puid: this.state.payload.puid,
            pnickname: this.state.payload.pnickname
          }
        });
        this.setState({modal:false})
      });
    }

  return(
    <div>
      <div className={styles.wrapper}>
        <div className={styles.bg}></div>
        <DetailCard
          {...article}
          changeLike={itemLikeClick}
          commentClick={commentClick}
          replyClick={replyClick}
        />
      </div>
      <Modal
        popup
        visible={this.state.modal}
        onClose={this.onClose}
        animationType="slide-up"
        className={styles.modal}
      >
        <InputItem
          {...getFieldProps('content')}
          placeholder='可以在这写评论'
          className={styles.input}
          clear
        />
        <Button onClick={submit} >发送</Button>
      </Modal>
    </div>

  )
}

}
const Form = createForm()(Detail);

export default connect(({detail})=>({detail}))(Form);
