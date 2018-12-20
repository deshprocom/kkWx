import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { AtInput, AtForm ,AtButton} from 'taro-ui'
@connect(({BindMobile}) => ({
  ...BindMobile,
}))
export default class BindMobile extends Component {
  config = {
    navigationBarTitleText: '绑定手机',
  };

  constructor () {
    super(...arguments)
    this.state = {
      value14: '',
      value15: '',
      disabled: false,
      second: 60
    }
  }

  componentDidMount = () => {

  };

  showTipText () {
    return this.state.disabled ? `${this.state.second}s后重试` : '发送验证码'
  }

  sendCode () {
    if (this.state.disabled) return
    this.setState({
      disabled: true
    })
    // 倒计时
    const timer = setInterval(() => {
      if (this.state.second > 0) {
        this.setState({
          second: this.state.second - 1
        })
      } else {
        this.setState({
          second: 60,
          disabled: false
        })
        clearInterval(timer)
      }
    }, 1000)
  }

  handleInput (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }
  handleClick () {
    Taro.showToast({
      title: '已发送验证码',
      icon: 'success',
      duration: 2000
    })
  }

  render() {
    return (
      <View className="BindMobile-page">
        <View className='panel'>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                 
                  <AtInput name='value15' border={true} type='phone' clear placeholder='请输入手机号码' value={this.state.value15} onChange={this.handleInput.bind(this, 'value15')}>
                    <View
                      style={{
                        'color': this.state.disabled ? '#FF4949' : '',
                        'fontSize': '12px',
                        'width': '90px'
                      }}
                      onClick={this.sendCode.bind(this)}
                    >
                      {this.showTipText()}
                    </View>
                  </AtInput>
                  <View style="height:1px;"/>

                  <AtInput name='value14' title='验证码' type='number' maxlength='6' clear placeholder='验证码' value={this.state.value14} onChange={this.handleInput.bind(this, 'value14')}/>
                   
                 
                </AtForm>
              </View>
            </View>

            <View className='btn-item btn-bind'>
                <AtButton type='primary' loading>Loading</AtButton>
              </View>
          </View>
        </View>
     
    )
  }
}
