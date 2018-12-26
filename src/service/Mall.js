/**
 *作者：lorne
 *时间：2018/12/3
 *功能：
 */
import { get, post } from '../utils/request'
import api from '../config/api'
import Taro from '@tarojs/taro';
import { logMsg, showToast } from '../utils/utils';

export function getShopCategorios(resolve, reject) {
  get(api.shopCategories, {}, resolve, reject)
}

export function createOrder(param, resolve, reject) {
  post(api.shop_order, param, ret=>{
    resolve(ret)
    shopWxPay(ret.order_number)
  }, reject)

}

export function newOrder(param, resolve, reject) {
  post(api.new_shop_order, param, resolve, reject)
}

export function shopOrderList(param, resolve, reject) {
  get(api.shop_order, param, resolve, reject)
}

export function shopOrderDetail(id,resolve,reject){
  get(`${api.shop_order}/${id}`, {}, resolve, reject)
}

export function shopWxPay(order_num,resolve,reject){
  post(`${api.shop_order}/${order_num}/wx_pay`, {trade_source:'miniprogram'}, ret=>{
   
    let callback = {success:(res)=>{
      logMsg('微信支付结果1',res)
      
    },fail:(res)=>{
      res.err_desc && showToast(res.err_desc)
      logMsg('微信支付失败',res)
    }}
    Object.assign(ret,callback)
    logMsg('微信支付参数',ret)
    Taro.requestPayment(ret)

  }, reject)
}

export function shopWxPayEnd(order_num,resolve,reject){
  post(`${api.shop_order}/${order_num}/wx_paid_result`, {}, resolve, reject)
}
