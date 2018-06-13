/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 22:31
 * Desc :
 */
import {routerRedux} from 'dva/router';
import {getArticle} from '../services/bubble';
import delay from '../utils/delay';

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
    }
  },
  reducers: {
    updateArticle(state,action){
      return {...state,...action.payload}
    }
  }
}
