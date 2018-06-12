/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 13:13
 * Desc :
 */
export default {
  namespace: 'main',
  state: {
    theme: [
      { id: 1, name: '此刻'},
      { id: 2, name: '丧'},
      { id: 3, name: '打卡'},
      { id: 4, name: '吐槽'},
      { id: 5, name: '秘密'},
      { id: 6, name: '心愿'},
      { id: 7, name: '求助'},
      { id: 8, name: '开心'},
      { id: 9, name: '恋爱'},
      { id: 10, name: '烦恼'},
      { id: 11, name: '自拍'},
      { id: 12, name: '出柜'},
      { id: 13, name: '孤独'},
      { id: 14, name: '安利'},
      { id: 15, name: '学习'},
      { id: 16, name: '求撩'},
      { id: 17, name: '美食'},
      { id: 18, name: ''}
    ]
  },
  subscriptions: {

  },
  effects: {
    *itemclick({payload},{select}) {
      console.log(payload.id)
    }
  },
  reducers: {

  },
}
