import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import right_img from '../../images/mine/right.png'
import { logMsg } from '../../utils/utils';
import { AtInput, AtForm, AtTextarea } from 'taro-ui'

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
    product: {}
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
        <View className="order_top_view">
          <AtInput
            name='value1'
            title={`姓    名: `}
            type='text'
            placeholder={userName}
            border={true}
          />
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
          />

        </View>
        <View className="message_view_top">
          <Text className="left_name2">商品信息</Text>
          <View style='display:flex;flex:1' />
          <Text className="left_phone2">共计2件</Text>
        </View>
        <View className="message_view">
          <View className="list_view">
            <Image
              className="list_btn_img"
              src="../../images/tab/cart-active.png"
            />
            <View className="list_view_right">
              <Text className="intro_text">新概念短线蓝牙耳机 立体声音低声智能降噪</Text>
              <View className="right_view_middle">
                <Text className="price_text">¥39.9</Text>
                <Text className="origin_price_text">¥69.9</Text>
                <View style='display:flex;flex:1' />
                <Text className="count_text"><Text className="count_text1">X</Text>1</Text>
              </View>
              <View className="right_view_middle">
                <View className="use_btn_view">
                  <Text className="use_text">待使用</Text>
                </View>
              </View>
            </View>
          </View>
          <View style="width:100%;height:2px;" />
        </View>

        <View className="message_view_top">
          <Text className="left_name2">订单明细</Text>
        </View>

        <View className="detail_view">
          <View className="message_view_top">
            <Text className="freight_text2">商品金额</Text>
            <View style='display:flex;flex:1' />
            <Text className="price_text2" >¥39.9</Text>
          </View>
          <View className="message_view_top">
            <Text className="freight_text2">运费</Text>
            <View style='display:flex;flex:1' />
            <Text className="price_text2">¥31.9</Text>
          </View>
        </View>

        <View className="remarks_view">
          <Text className="freight_text">备注</Text>
        </View>

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
