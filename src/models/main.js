/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 13:13
 * Desc :
 */
import {routerRedux} from 'dva/router'
import {getBubbles} from "../services/bubble";
import delay from "../utils/delay";
import {login} from "../services/login";
import { Toast } from 'antd-mobile';

export default {
  namespace: 'main',
  state: {
    theme: [
      { id: 1, name: '此刻'},
      { id: 2, name: '丧'},
      { id: 3, name: '打卡'},
      { id: 4, name: '吐槽'},
      { id: 5, name: '秘密'},
      { id: 6, name: '心愿'},
      { id: 7, name: '开心'},
      { id: 8, name: '恋爱'},
      { id: 9, name: '烦恼'},
      { id: 10, name: '出柜'},
      { id: 11, name: '孤独'},
      { id: 12, name: '学习'},
      { id: 13, name: 'sex'},
      { id: 14, name: '自拍'},
      { id: 15, name: '安利'},
      { id: 16, name: '集赞'},
      { id: 17, name: '脆皮鸭'},
      { id: 18, name: '前任'}
    ],
    bubble: [],
    tid: 2,
    userdata: {},
  },
  subscriptions: {
    setup({dispatch,history}) {
      history.listen(({pathname}) => {
        if (pathname === '/theme'){
          dispatch({type: 'query'})
        }
      })
    }
  },
  effects: {
    *login({payload},{call,put}) {
      payload.username = payload.username.replace(/\s/g,"")
      const {data} = yield call(login,payload);
      if (data.errcode === 'OK') {
        Toast.success('登陆成功',1.5)
        yield call(delay,1500)
        const userdata = data.data;
        yield put({
          type: 'save',
          payload: {
            userdata:userdata,
          }
        })
        yield put(routerRedux.push('./main'))
      } else {
        Toast.fail('用户名或密码错误',2)
      }
    },
    *itemclick({payload},{select,put}) {
      yield put({
        type: 'updateTid',
        payload: {
          tid: payload.tid
        }
      })
      yield put(routerRedux.push('./theme'))
    },
    *query({payload},{put,call,select}) {
      let tid = yield select(state => state.main.tid);
      const {data} = yield call(getBubbles,{tid:tid});
      yield put({
        type: 'querySuccess',
        payload: {
          bubble: data.data,
        }
      });
    },
    *likeClick({payload},{select,put,call}) {
      const {uid} = yield select(state => state.main.userdata);
      console.log(uid,payload)
    }
  },
  reducers: {
    querySuccess(state,action){
      const arr = Object.values(action.payload.bubble); // 对象值变数组
      const bubble = arr.slice(0,arr.length-1); // 切掉最后一个page字段的值
      return {...state, bubble };
    },
    updateTid(state,action) {
      return {...state, ...action.payload}
    },
    save(state,action) {
      return {...state, ...action.payload}
    }
  },
}
