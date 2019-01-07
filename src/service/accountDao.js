import { post, setToken } from '../utils/request'
import api from '../config/api'
import { logMsg } from '../utils/utils';
import Taro, { Component } from '@tarojs/taro';
import dva from '../config/dva'

export function userLogin(params, resolve, reject) {
      post(api.user_login, params, ret => {
            resolve(ret)
      }, reject)
}

export function bindMobile(params, resolve, reject) {
      post(api.bind_mobile, params, ret => {
            logMsg('手机号绑定', ret)
            const { status, access_token } = ret;
            if (status === 'login_success') {
                  dva.getDispatch()({ type: 'Mine/effectsUser', loginUser: ret })
            }
            resolve(ret)
      }, reject)
}

export function wxMobileBind(params, resolve, reject) {
      post(api.v_code, params, resolve, reject)
}