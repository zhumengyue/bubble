/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/11
 * Time : 16:38
 * Desc : 延迟函数
 */

const delay  = timeout => new Promise(resolve => setTimeout(resolve, timeout)); // 延迟函数
export default delay;
