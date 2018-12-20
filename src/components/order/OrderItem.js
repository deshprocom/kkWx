import Taro, { Component } from '@tarojs/taro';
import { View, Button, FunctionalPageNavigator } from '@tarojs/components';
import './index.scss';


export default class OrderItem extends Component {

  goOrderDetail(e) {
    Taro.navigateTo({ url: '/pages/OrderDetail/index' })
  }

  render() {
    return (<View className="order_list_view"
      onClick={this.goOrderDetail.bind(this)}>
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
            <View style='display:flex;flex:1' />
            <Text className="count_text"><Text className="count_text1">X</Text>1</Text>
          </View>
          <View className="right_view_middle">
            <View className="use_btn_view">
              <Text className="use_text">待使用</Text>
            </View>
            <Text className="freight_text">运费：¥39</Text>
          </View>
        </View>
      </View>
    </View>)
  }
}