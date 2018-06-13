/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 14:22
 * Desc :
 */
import {routerRedux} from 'dva/router';
import { login } from '../services/login';
import { Toast } from 'antd-mobile';
import delay from '../utils/delay';

export default {
  namespace: 'login',
  state: {},
  effects: {
    *login({payload},{call,put}) {
      payload.username = payload.username.replace(/\s/g,"")
      const {data} = yield call(login,payload);
      if (data.errcode === 'OK') {
        Toast.success('登陆成功',1.5)
        yield call(delay,1500)
        yield put(routerRedux.push('./main'))
      } else {
        Toast.fail('用户名或密码错误',2)
      }
    }
  },
  reducers: {

  }
}
