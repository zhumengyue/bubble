/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 22:31
 * Desc :
 */
import {routerRedux} from 'dva/router';
import {changeLike, getArticle} from '../services/bubble';
import delay from '../utils/delay';
import {isLogin} from "../services/login";
import {Toast} from 'antd-mobile'

export default {
  namespace: 'detail',
  state: {
    article: {},
  },
  effects: {
    *getArticle({payload},{call,put,select}) {
      const {data} = yield call (getArticle,{bid: payload.bid})
      yield put({
        type:'updateArticle',
        payload: {
          article: data.data
        }
      })
      yield put(routerRedux.push('./detail'))
    },
    *changeLike({payload},{call,put,select}) {
      const {data} = yield call(isLogin);
      if(!data.data)
        Toast.offline('请先登录~',1.5)
      else {
        const {data} = yield call(changeLike,payload)
        data.errmsg === '喜欢成功' ? Toast.success('已喜欢',1.5) : Toast.success('已取消喜欢',1.5)
        yield put({type: 'getArticle',payload})
      }
    }
  },
  reducers: {
    updateArticle(state,action){
      return {...state,...action.payload}
    }
  }
}
