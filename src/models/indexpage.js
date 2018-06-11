import { routerRedux } from 'dva/router'

export default {
  namespace: 'indexpage',
  state: {
  },

  subscription: {
    setup({ dispatch, history }) {

    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *goto({ payload }, { call, put }) {
      yield put(routerRedux.push('/products'))
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
