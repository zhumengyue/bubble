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
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *goto({ payload }, { call, put }) {
      yield call(delay, payload.click ? 200 : 1700)
      yield put(routerRedux.push('/products'))
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
