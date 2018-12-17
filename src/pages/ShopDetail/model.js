import * as ShopDetailApi from './service';

export default {
  namespace: 'ShopDetail',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { statusCode, data } = yield call(ShopDetailApi.demo, {});
      yield put({ type: 'save',
          payload: {
            topData: data,
          } });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
