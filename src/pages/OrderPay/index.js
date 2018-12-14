import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

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
        OrderPay
      </View>
    )
  }
}
