/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 19:06
 * Desc :
 */
import fetch from '../utils/fetch';

export function getBubbles(payload) {
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

export function getRandomBid() {
  return fetch({
    method: 'get',
    url: '/api/bubble/getRandBid'
  })
}

export function changeLike(payload) {

  console.log(payload.islike);

  if(payload.islike)
    return fetch({
      method: 'post',
      data: payload,
      url: '/api/like/delLike'
    })
  else
    return fetch({
      method: 'post',
      data: payload,
      url: '/api/like/addLike'
    })
}

