/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/13
 * Time : 14:43
 * Desc :
 */
import fetch from '../utils/fetch';

export function login(payload) {
  console.log(payload)
  return fetch({
    method: 'post',
    data: payload,
    url: '/api/login/okLogin'
    // url: 'http://bubble.applinzi.com/public/index.php/api/login/okLogin'
  })
}
