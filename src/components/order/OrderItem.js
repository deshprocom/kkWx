import Taro, { Component } from '@tarojs/taro';
import { View, Button, FunctionalPageNavigator } from '@tarojs/components';
import './index.scss';


export default class OrderItem extends Component {

  goOrderDetail(e) {
    Taro.navigateTo({ url: '/pages/OrderDetail/index' })
  }

  render() {
    const {item} = this.props
    return (<View className="order_list_view"
      onClick={this.goOrderDetail.bind(this)}>
      <View className="list_view">
        <Image
          className="list_btn_img"
          src={item.image}
        />
        <View className="list_view_right">
          <Text className="intro_text">{item && item.title}</Text>
          <View className="right_view_middle">
            <Text className="price_text">{`¥${item.price}`}</Text>
            <Text className="origin_price_text">{`¥${item.original_price}`}</Text>
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