/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/11
 * Time : 17:22
 * Desc :
 */
import { routerRedux } from 'dva/router'
export default {
  namespace: 'products',
  state: [],
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if ( location.pathname === '/products' )
          console.log('this is page products')
      });
    },
  },
  effects: {
    *back({payload},{put}) {
      yield put(routerRedux.push('./'))
    }
  },
  reducers: {
    del(state, {payload: id}) {
      console.log(id)
      return state.filter(item=>item.id!==id)
    }
  }
}
