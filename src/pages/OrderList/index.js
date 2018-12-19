import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({OrderList}) => ({
  ...OrderList,
}))
export default class Orderlist extends Component {
  config = {
    navigationBarTitleText: 'OrderList',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="OrderList-page">
        OrderList
      </View>
    )
  }
}
