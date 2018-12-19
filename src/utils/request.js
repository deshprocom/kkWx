/**
 *作者：lorne
 *时间：2018/12/3
 *功能：
 */
import Taro from '@tarojs/taro';
import Api from '../config/api';

let Headers = {
  'Content-Type': 'application/json',
}

export function get(url,data,resolve,reject) {
  let options = {url,data,resolve,reject,method: 'GET'}
  request(options)
}


export default function request (options = { method: 'GET', data: {} }) {
  if (!Api.noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`);
  }
  return Taro.request({
    url: Api.baseUrl + options.url,
    data: options.data,
    headers: Headers,
    method: options.method.toUpperCase(),
  }).then((res) => {

    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!Api.noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,res);
      }
      if (data.code !== 0) {
        Taro.showToast({
          title: `${data.msg}~` || data.code,
          icon: 'none',
          mask: true,
        });
      }
      options.resolve && options.resolve(data.data)
      return res;
    } else {
      options.reject && options.reject(res)
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}

