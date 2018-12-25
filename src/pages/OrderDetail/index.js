import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import OrderItem from '../../components/order/OrderItem'
import { shopOrderDetail } from '../../service/Mall';
import { logMsg } from '../../utils/utils';

@connect(({OrderDetail}) => ({
  ...OrderDetail,
}))
export default class Orderdetail extends Component {
  config = {
    navigationBarTitleText: 'OrderDetail',
  };

  componentDidMount = () => {
      let param = this.$router.params
     
      shopOrderDetail(param.order_number,ret=>{
        logMsg('订单详情',ret)
      },err=>{
        logMsg('订单详情',err)
      })
  };

  render() {
    return (
      <View className="OrderDetail-page">
        <View className="detail_top_view">
          <Text className="top_text">商品信息</Text>
        </View>
        {/* <OrderItem/> */}

        <View className="detail_top_view" style="margin-top:10px;">
          <Text className="top_text">订单信息</Text>
        </View>
        <View className="detail_list_view">
          <Text className="detail_text1">订单编号：20180907367</Text>
          <Text className="detail_text1">下单时间：2018年12月3日 14:30</Text>
          <Text className="detail_text1">商品金额：¥39</Text>
          <Text className="detail_text1">实际付款：¥38</Text>
          <View className="last_detail_view">
            <Text className="detail_text3">使用状态：</Text>
            <Text className="detail_text2">待使用</Text>
          </View>
        </View>
        <View className="erweima_view">
          <Text className="text1">商家扫码</Text>
        </View>

        <View className="btn_view">
          <Text className="top_text">联系客服</Text>
        </View>
      </View>
    )
  }
}
