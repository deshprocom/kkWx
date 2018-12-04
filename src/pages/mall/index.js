import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({mall}) => ({
  ...mall,
}))
export default class Mall extends Component {
  config = {
    navigationBarTitleText: 'mall',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="mall-page">
        mall
      </View>
    )
  }
}
