import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import right_img from '../../images/mine/right.png'
import { logMsg } from '../../utils/utils';
import { AtInput, AtInputNumber, AtTextarea } from 'taro-ui'
import OrderItem from '../../components/order/OrderItem'

@connect(({ OrderPay }) => ({
  ...OrderPay,
}))
export default class Orderpay extends Component {
  config = {
    navigationBarTitleText: 'OrderPay',
  };

  state = {
    userName: '',
    mobile: '',
    product: {},
    number5: 1,
  }

  handleNumberChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  componentDidMount = () => {

    let product = this.$router.params
    logMsg('参数', product)

    try {
      let loginUser = Taro.getStorageSync('loginUser')
      logMsg('登录用户', loginUser)
      if (loginUser && loginUser.user) {
        let user = loginUser.user
        this.setState({
          userName: user.nick_name,
          mobile: user.mobile,
          product
        })
      }
    } catch (error) {

    }

  };

  render() {
    const { userName, mobile } = this.state
    return (
      <View className="OrderPay-page">
       <View className="message_view_top">
          <Text className="left_name2">输入订单信息</Text>
        </View>
        <View className="order_top_view">
       
          <AtInput
            name='value1'
            title={`姓    名: `}
            type='text'
            placeholder={userName}
            border={true}
          />
          <View style="height:1px;" />
          <AtInput
            name='value2'
            title={`手机号码: `}
            type='number'
            placeholder={mobile}
          />

          <AtTextarea
            className='textarea'
            maxLength={200}
            placeholder='备注...'
            height={200}
          />

        </View>
        <View className="message_view_top">
          <Text className="left_name2">商品信息</Text>
           <View style="flex:1;"/>
          <View className='panel__content' style="margin-right:20px;">
          <View className='example-item'>
            <AtInputNumber size='lg' min={0} max={10} step={1} value={this.state.number5} onChange={this.handleNumberChange.bind(this, 'number5')} />
          </View>
        </View>
        </View>
        <OrderItem />
        

        <View className="bottom_view">
          <Text className="freight_text2">实付款：</Text>
          <Text className="price_text">¥89.9</Text>
          <View style='display:flex;flex:1' />
          <View className="pay_view">
            <Text className="pay_text">微信支付</Text>
          </View>
        </View>
       
      </View>
    )
  }
}
