/*
 * @Author: Jason Shen
 * @Date: 2023-06-22 21:33:01
 * @Description: 卷死别人！
 * @FilePath: \forum\src\utils\formatTime.ts
 */
import moment from 'moment';
// eslint-disable-next-line spellcheck/spell-checker
moment.locale('zh-cn'); // 设置语言 或 moment.lang('zh-cn');

// 实现年月日周几
export const dateWeek = (function getDateWeek () {
  const date = new Date();
  const day = date.getDay(); // 周一返回的是1，周六是6，国外第一天是周日，所以0 是周日
  const arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return moment(date).format('YYYY年MM月DD日') + ' ' + arr[day];
// return moment(date).format('YYYY-MM-DD HH:mm:ss');
})(); 

// 实现年月日周几
export const dateNow = (() => {
    const date = new Date();
    const day = date.getDay();
    return moment(date).format('YYYY-MM-DD');
})(); 


// 将后端传来的时间 弄成自己想要的格式
export function dateTime (date: number | string |Date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
