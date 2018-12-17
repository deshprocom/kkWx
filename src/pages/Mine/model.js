import * as MineApi from './service';

export default {
  namespace: 'Mine',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { statusCode, data } = yield call(MineApi.demo, {});
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
