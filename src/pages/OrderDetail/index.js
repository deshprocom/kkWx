import Taro, { Component } from '@tarojs/taro';
import { View ,Canvas,ScrollView} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import OrderItem from '../../components/order/OrderItem'
import { shopOrderDetail } from '../../service/Mall';
import { logMsg,convertDate ,utcDate} from '../../utils/utils';
import drawQrcode from 'weapp-qrcode'

@connect(({OrderDetail}) => ({
  ...OrderDetail,
}))
export default class Orderdetail extends Component {
  config = {
    navigationBarTitleText: '订单详情',
  };

  state={
    orderDetail:{}
  }

  componentDidMount = () => {
      let param = this.$router.params
      drawQrcode({
        width: 200,
        height: 200,
        canvasId: 'OrderQrcode',
        text: param.order_number
      })
      shopOrderDetail(param.order_number,ret=>{
        logMsg('订单详情',ret);
        this.setState({
          orderDetail:ret
        })
      },err=>{
        logMsg('订单详情',err)
      })
  };
  pay_status=(pay_status)=>{
    if (pay_status === 'paid') {
      return '待使用';
    } else if (pay_status === 'unpaid') {
        return '待付款';
    } else if (pay_status === 'compeleted') {
        return '已完成';
    }else if (pay_status === 'cancel') {
      return '已完成';
    } else {
        return pay_status
    }
  }

  render() {
    const {orderDetail} = this.state;
    const {created_at,final_price,order_number,pay_status,refunded_price,shipping_price,status,total_price,total_product_price} = orderDetail;
    return (
      <View className="OrderDetail-page">
       <ScrollView scrollY>
       <View className="detail_top_view" style="margin-top:2px;">
          <Text className="top_text">商品信息</Text>
        </View>
        <OrderItem item={orderDetail} unclick={true}/>

        <View className="detail_top_view" style="margin-top:10px;">
          <Text className="top_text">订单信息</Text>
        </View>
        <View className="detail_list_view">
          <Text className="detail_text1">订单编号：{order_number}</Text>
          <Text className="detail_text1">下单时间：{utcDate(created_at,'YYYY年MM月DD日 MM:ss')}</Text>
          <Text className="detail_text1">商品金额：¥{total_price}</Text>
          <Text className="detail_text1">实际付款：¥{total_product_price}</Text>
          <View className="last_detail_view">
            <Text className="detail_text3">使用状态：</Text>
            <Text className="detail_text2">{this.pay_status(pay_status)}</Text>
          </View>
        </View>
        {status === 'paid'?<View className="erweima_view">
          <Text className="text1">商家扫码</Text>
          <Canvas style="width: 200px; height: 200px;" canvas-id="OrderQrcode"></Canvas>
        </View>:null}
        
        <View style="height:120px;"/>
       </ScrollView>
        

        <View className="btn_view">
          <Text className="top_text">联系客服</Text>
        </View>
      </View>
    )
  }
}
