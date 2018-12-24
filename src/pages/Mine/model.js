import * as MineApi from './service';
import { logMsg } from '../../utils/utils';
import {setToken} from '../../utils/request'
import Taro from '@tarojs/taro';

export default {
  namespace: 'Mine',
  state: {
    loginUser:{}
  },

  effects: {
    * effectsUser(_, { call, put }) {
  
      logMsg('用户数据',_.loginUser)
      setToken(_.loginUser.access_token)
      Taro.setStorageSync('loginUser',_.loginUser)
      yield put({ type: 'save',
          payload: {
            loginUser: _.loginUser,
          } });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
