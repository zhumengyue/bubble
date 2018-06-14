import {getBubbles} from "../services/bubble";
import delay from "../utils/delay";
import {login} from "../services/login";

/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/14
 * Time : 12:50
 * Desc :
 */
export default {
  namespace: 'random',
  state: {

  },
  subscriptions: {
    setup({dispatch,history}) {
      history.listen(({pathname}) => {
        if (pathname === '/random'){
          dispatch({type: 'query'})
        }
      })
    }
  },
  effects: {

  },
  reducers: {

  },
}
