import Taro, { Component } from '@tarojs/taro';
import { View, Button, FunctionalPageNavigator } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { logMsg } from '../../utils/utils';

@connect(({ Mine }) => ({
  ...Mine,
}))
export default class Mine extends Component {
  config = {
    navigationBarTitleText: 'Mine',
  };

  componentDidMount = () => {

  };

  onUserInfo = (e) => {
    logMsg('用户信息', e)
  }

  onEventPhone = (e) => {
    
    Taro.getUserInfo({
      success: function (res) {
        logMsg('用户信息', res)
      }
    })
    Taro.login({
      success: function (res) {
        logMsg('登陆信息', res)
      }
    })
    Taro.e
    logMsg('手机号', e)
  }

  onFail = (e) => {
    logMsg('sdf', e)
  }

  render() {
    return (
      <View className="Mine-page">

        <Button onClick={this.onPay}>
          支付
          </Button>
        <Button openType="getUserInfo" onGetUserInfo={this.onUserInfo}>
          获取用户信息
         </Button>
        <Button openType="getPhoneNumber" onGetPhoneNumber={this.onEventPhone}>
          获取手机号
        </Button>
      </View>
    )
  }

  onPay = (e)=>{
   
  }
}
