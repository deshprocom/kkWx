import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import {AtButton,AtAvatar} from 'taro-ui'
import { reLogin } from '../../utils/utils';

@connect(({Login}) => ({
  ...Login,
}))
export default class Login extends Component {
  config = {
    navigationBarTitleText: '登录',
  };

  componentDidMount = () => {

  };

  onUserInfo(e){
    reLogin(e)
  }

  render() {
    
    return (
      <View className="Login-page">
     
      <AtAvatar circle text={'头像'}></AtAvatar>
      <AtButton type='primary'
      openType='getUserInfo'
      onGetUserInfo={this.onUserInfo.bind(this)}>
       登录
      </AtButton>
  
      </View>
    )
  }
}
