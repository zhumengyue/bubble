/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/12
 * Time : 14:44
 * Desc : mock api
 */
const Mock=require('mockjs');

const boolean = [false,false,false,false,false,false,false,true,false];

let mylist=Mock.mock({
  'data|10':[{
    'id|+1': 1,
    'username':'@cword(2,7)',
    'sex|0-1': 1,
    // 'time': '@now(\'yyyy-MM-dd HH:mm:ss\')',
    'time': '@now(\'day\')',
    'content': '@cparagraph(3,7)',
    'img|0-4':['@image(80)'],
    'like|0-50': 1,
    'comment|0-50': 1,
    'themeid|1-17': 1,
    'liked': '@BOOLEAN',
    'status':0
  }]
});

let alllist = Mock.mock({
  'data|20-30':[{
    'id|+1': 1,
    name:'@cname',
    filename: '@cword(8,14)',
    createtime: '@datetime',
    status: 1,
  }]
});

module.exports={
  'GET /api/article/*' (req,res){
    res.json({
      errcode: 0,
      errmsg: 'OK',
      data: mylist.data
    })
  },

  [`GET /api/alllist`](req,res){

    res.status(200).json(alllist);
  },
}
