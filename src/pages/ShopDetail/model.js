import * as ShopDetailApi from './service';
import { logMsg } from '../../utils/utils';

export default {
  namespace: 'ShopDetail',
  state: {
    shopDetail:{}
  },

  effects: {
    * detail(_, { call, put }) {
      logMsg('商品详情参数',_)
      let data = yield call(ShopDetailApi.detail, _.param);
      logMsg('商品详情',data)
      yield put({ type: 'save',
          payload: {
            shopDetail: data,
          } });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
