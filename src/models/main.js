/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 13:13
 * Desc :
 */
import {routerRedux} from 'dva/router'
import {getBubbles,changeLike,getTopic,isNoRead,resetNoRead,getNoRead,getUserInfo,sendBubble} from "../services/bubble";
import delay from "../utils/delay";
import {login,isLogin} from "../services/login";
import { Toast } from 'antd-mobile';

export default {
  namespace: 'main',
  state: {
    theme: [
      { id: 1, name: '此刻'},
    ],
    bubble: [],
    tid: 1,
    userdata: {},
    isNoRead: false,
    noReadNum: 0,
  },
  subscriptions: {
    setup({dispatch,history}) {
      history.listen(({pathname}) => {
        if (pathname === '/main') {
          dispatch({type: 'querytopic'})
          dispatch({type: 'isNoRead'})
        } else if (pathname === '/theme'){
          dispatch({type: 'query'})
        } else if(pathname === '/random') {
          dispatch({type: 'queryrandom'})
        }
      })
    }
  },
  effects: {
    *getUserInfo({payload},{call,put,select}){
      const {data} = yield call(getUserInfo)
      yield put({
        type: 'save',
        payload: {
          userdata: data.data
        }
      })
      const userdata = yield select(state=>state.main.userdata)
      console.log(userdata)
    },
    *write({payload},{call,put,select}){
      let {data} = yield call(getUserInfo)
      yield put({
        type: 'save',
        payload: {
          userdata: data.data
        }
      })
      console.log(data)
      const tid = yield select(state=>state.main.tid)
      const userdata = yield select(state=>state.main.userdata)
      payload = {...payload,...{tid:tid,nickname: userdata.nickname}}
      let result = yield call(sendBubble,payload)
       // result.data.data
      let response = result.data.data;
      console.log(response)
      if(response) {
        Toast.success('发送成功~',1.1);
        yield call(delay,1100)
        yield put(routerRedux.push('./main'))
      } else {
        Toast.fail('发送失败~',1.1);
      }
    },
    *toWrite({payload},{call,put,select}){
      yield put(routerRedux.push('./create'))
    },
    *toSelf({payload},{call,put,select}){
      const {data} = yield call(isLogin)
      if(!data.data) {
        Toast.offline('请先登录~',1)
        yield call(delay,1000)
        yield put(routerRedux.push('./login'))
      }  else {
        const {data} = yield call(resetNoRead);
        if(data.data !== 0) {
          yield put({
            type: 'save',
            payload: {
              isNoRead: false,
              noReadNum: 0
            }
          });
        }
        yield put(routerRedux.push('./selfcenter'))
      }
    },
    *isNoRead({payload},{call,put,select}){
      const {data} = yield call(isNoRead);
      if(data.data && data.data.noread !== 0)
        yield put({
          type: 'save',
          payload: {
            isNoRead: true,
            noReadNum: data.data.noread
          }
        });

    },
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
    *toRandom({payload},{select,put}) {
      yield put(routerRedux.push('./random'))
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
      let {uid} = yield select(state => state.main.userdata);
      const {data} = yield call(isLogin);
      if(!data.data)
        Toast.offline('请先登录~',1.5)
      else {
        const {data} = yield call(changeLike,payload)
        data.errmsg === '喜欢成功' ? Toast.success('已喜欢',1.5) : Toast.success('已取消喜欢',1.5)
        yield put({type: 'query'})
      }
    },
    *querytopic({payload},{select,put,call}) {
      const {data} = yield call(getTopic);
      yield put({type: 'save',payload: {theme: data.data}})
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
