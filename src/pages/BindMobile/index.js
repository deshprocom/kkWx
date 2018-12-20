import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import countdown from '../../components/countdown'

@connect(({BindMobile}) => ({
  ...BindMobile,
}))
export default class BindMobile extends Component {
  config = {
    navigationBarTitleText: '绑定手机',
  };

  componentDidMount = () => {

  };

  getMobile = (event) => {
    const value = event.target.value;
   
  }

  getCode = (event) => {
    const value = event.target.value;
   
  }

  render() {
    return (
      <View className="login-page">
       <View className="loginWrap">
            <View className="inpuWrapMpblie">
              <Input type="number" name="mobile" maxLength="11" placeholder="请输入手机号" value={this.props.mobile} onInput={this.getMobile} />
              <Button>发送验证码</Button>
            </View>
            <View className="inpuWrapNumber">
              <Input type="number" name="code" maxLength="4" placeholder="请输入验证码" value={this.props.code} onInput={this.getCode} />

            </View>
            <Button className="button" onClick={this.login}>绑定</Button>
            
          </View>
      </View>
    )
  }
}
