import { routerRedux } from 'dva/router'
import delay from '../utils/delay';

export default {
  namespace: 'indexpage',
  state: {
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({pathname}) => {
        if (pathname === '/'){
          dispatch({type: 'goto',payload: {click: false}})
        }
      })
    }
  },
  effects: {
    *goto({ payload }, { call, put }) {
      yield call(delay, payload.click ? 200 : 1700)
      yield put(routerRedux.push('/login'))
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
