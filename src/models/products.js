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
  state: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
      { name: 'antd-mobile', id: 3 },
    ]
  },
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
      return { ...state, products: [...state.products.filter(item=>item.id!==id)]}
    },
    add(state) {
      return {...state, products: [...state.products, {name: 'zmy'+(state.products.length+1), id:state.products.length+1}]}
    }
  }
}
