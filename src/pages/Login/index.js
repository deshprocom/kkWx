import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({Login}) => ({
  ...Login,
}))
export default class Login extends Component {
  config = {
    navigationBarTitleText: 'Login',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="Login-page">
        Login
      </View>
    )
  }
}
