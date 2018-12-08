import Taro, { Component } from '@tarojs/taro';
import { View ,Text} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({mall}) => ({
  ...mall,
}))
export default class Mall extends Component {
  config = {
    navigationBarTitleText: '折扣',
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
