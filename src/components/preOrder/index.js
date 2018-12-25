import Taro, { Component } from '@tarojs/taro';
import { View, Button, FunctionalPageNavigator } from '@tarojs/components';
import './index.scss';
import { urlEncode } from '../../utils/utils';


export default class PreOrder extends Component {

  goOrderDetail(item,e) {
    let url = `/pages/OrderDetail/index?${urlEncode(item)}`
    Taro.navigateTo({ url })
  }

  render() {

    return (<View className="order_list_view"
      onClick={this.goOrderDetail.bind(this,item)}>
      <View className="list_view">
        <Image
          className="list_btn_img"
          src="https://cdn-upyun.deshpro.com/uploads/products/Variant/4/b6c9b1e09d8dadf4087f5039876e19ec.jpg!sm"
        />
        <View className="list_view_right">
          <Text className="intro_text">拉萨地方是对方离开</Text>
          <View className="right_view_middle">
            <Text className="price_text">{`¥${23}`}</Text>
            <Text className="origin_price_text">{`¥${46}`}</Text>
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