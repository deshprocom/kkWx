import Taro, { Component } from '@tarojs/taro';
import { View, Button, FunctionalPageNavigator } from '@tarojs/components';
import './index.scss';
import { urlEncode,strNotNull} from '../../utils/utils';

export default class OrderItem extends Component {

  goOrderDetail(item,e) {
    let url = `/pages/OrderDetail/index?${urlEncode(item)}`
    Taro.navigateTo({ url })
  }

  render() {
    const {item} = this.props;
    const {created_at,final_price,order_items,order_number,pay_status,refunded_price,shipping_price,
      status,total_price,total_product_price} = item;
    let products = item.order_items;
    let product = item.order_items[0];
    const {image,number,original_price,price,product_id,return_status_text,returnable} = product;
    
    let status_text = strNotNull(return_status_text) ? <View className="use_btn_view">
    <Text className="use_text">{return_status_text}</Text>
  </View> :<View/>;
  // let pay_status={
  //   ()=>{·
  //     if(status === 'unpaid'){
  //       return <Text className="text3" style="margin-right:10px;">待付款</Text>
  //     }else if(status === 'paid'){
  //       return <Text className="text3" style="margin-right:10px;">已付款</Text>
  //     }else if(status === 'canceled'){
  //       return <Text className="text3" style="margin-right:10px;">已取消</Text>
  //     }else if(status === 'completed'){
  //       return <Text className="text3" style="margin-right:10px;">已完成</Text>
  //     }
  //   }
  // }
  
  let item_list = products.map((product,index)=>{
    return (
      <View className="list_view" key={index}>
        <Image
          className="list_btn_img"
          src={product.image}
        />
        <View className="list_view_right">
          <View style="flex:1;">
          <Text className="intro_text">{product.title}</Text>
          </View>
          
          <View className="right_view_middle">
            <Text className="price_text">{`¥${product.price}`}</Text>
            <Text className="origin_price_text">{`¥${product.original_price}`}</Text>
            <View style="display:flex;flex:1;" />
            <Text className="count_text"><Text className="count_text1">X</Text>{product.number}</Text>
          </View>
          <View className="right_view_middle">
            {status_text}
            <Text className="freight_text">运费：¥{refunded_price}</Text>
          </View>
        </View>
      
      </View>
    )
  })

    return (<View className="order_list_view"
      onClick={this.goOrderDetail.bind(this,item)}>
      <View className="item_top_view">
        <Text className="text3" style="margin-left:10px;">订单编号：{order_number}</Text>
        <View style="display:flex;flex:1"/>
        {/* {this.pay_status(pay_status)} */}
      </View>
      {item_list}
      
    </View>)
  }

  
}