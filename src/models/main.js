/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 13:13
 * Desc :
 */
import {routerRedux} from 'dva/router'
import {getBubbles} from "../services/bubble";
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
      { id: 12, name: '学习'}
    ],
    bubble: [],
    tid: 2,
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
    }
  },
}
