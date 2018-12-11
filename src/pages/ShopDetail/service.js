import Request from '../../utils/request';
import api from '../../config/api'

export const demo = (data) => {
  return Request({
    url: api.shopCategories,
    method: 'get',
    data,
  });
};
