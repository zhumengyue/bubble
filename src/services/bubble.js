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

export function sendComment(payload) {
  console.log(payload);
  return fetch({
    method: 'post',
    data: payload,
    url: '/api/reply/sendReply'
  })
}

export function getTopic() {
  return fetch({
    method: 'get',
    url: '/api/topic/getAllTopic'
  })
}

// 判断是否有未读
export function isNoRead() {
  return fetch({
    method: 'get',
    url: '/api/index/isNoRead'
  })
}

// 重置未读
export function resetNoRead() {
  return fetch({
    method: 'get',
    url: '/api/index/resetNoRead'
  })
}

// 获取全部消息
export function getNoRead() {
  return fetch({
    method: 'get',
    url: '/api/index/getNoRead'
  })
}

export function getUserInfo() {
  return fetch({
    method: 'get',
    url: '/api/user/getUserInfo'
  })
}

export function sendBubble(payload) {
  console.log(payload)
  return fetch({
    method: 'post',
    data: payload,
    url: '/api/bubble/sendMyBubble'
  })
}
