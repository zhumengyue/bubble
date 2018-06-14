/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 19:06
 * Desc :
 */
import fetch from '../utils/fetch';

export function getBubbles(payload) {
  console.log(payload)
  return fetch({
    method: 'post',
    data: payload,
    url: '/api/bubble/getTopicBubble'
  })
}

export function getArticle(payload) {
  return fetch({
    method: 'post',
    data: payload,
    url: '/api/bubble/getTheBubble'
  })
}
