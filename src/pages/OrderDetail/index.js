import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({OrderDetail}) => ({
  ...OrderDetail,
}))
export default class Orderdetail extends Component {
  config = {
    navigationBarTitleText: 'OrderDetail',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="OrderDetail-page">
        OrderDetail
      </View>
    )
  }
}
