import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import right_img from '../../images/mine/right.png'

@connect(({OrderPay}) => ({
  ...OrderPay,
}))
export default class Orderpay extends Component {
  config = {
    navigationBarTitleText: 'OrderPay',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="OrderPay-page">
        <View className="order_top_view">
          <View className="top_left_view">
            <Text className="left_name">李大妞</Text>
            <Text className="left_phone">13640988285</Text>
          </View>
          <View style='display:flex;flex:1'/>
          <Image
            className="right_image"
            style="width:10px;height:15px"
            src={right_img}
          />
        </View>
        <View className="message_view_top">
          <Text className="left_name2">商品信息</Text>
          <View style='display:flex;flex:1'/>
          <Text className="left_phone2">共计2件</Text>
        </View>
        <View className="message_view">
          <View className="list_view">
              <Image
                className="list_btn_img"
                src="../../images/tab/cart-active.png"
              />
              <View className="list_view_right">
                <Text className="intro_text">新概念短线蓝牙耳机 立体声音低声智能降噪</Text>
                <View className="right_view_middle">
                  <Text className="price_text">¥39.9</Text>
                  <Text className="origin_price_text">¥69.9</Text>
                  <View style='display:flex;flex:1'/>
                  <Text className="count_text"><Text className="count_text1">X</Text>1</Text>
                </View>
                <View className="right_view_middle">
                  <View className="use_btn_view">
                    <Text className="use_text">待使用</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style="width:100%;height:2px;"/>
        </View>

        <View className="message_view_top">
          <Text className="left_name2">订单明细</Text>
        </View>

        <View className="detail_view">
          <View className="message_view_top">
            <Text className="freight_text2">商品金额</Text>
            <View style='display:flex;flex:1'/>
            <Text className="price_text2" >¥39.9</Text>
          </View>
          <View className="message_view_top">
            <Text className="freight_text2">运费</Text>
            <View style='display:flex;flex:1'/>
            <Text className="price_text2">¥31.9</Text>
          </View>
        </View>

        <View className="remarks_view">
          <Text  className="freight_text">备注</Text>
        </View>
        
        <View className="bottom_view">
          <Text className="freight_text2">实付款：</Text>
          <Text className="price_text">¥89.9</Text>
          <View style='display:flex;flex:1'/>
          <View className="pay_view">
              <Text className="pay_text">微信支付</Text>
          </View>
        </View>
      </View>
    )
  }
}
