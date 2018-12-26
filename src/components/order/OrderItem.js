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
      
    let product = item.order_items[0];
    const {image,number,original_price,price,product_id,return_status_text,returnable} = product;
    
    let status_text = strNotNull(return_status_text) ? <View className="use_btn_view">
    <Text className="use_text">{return_status_text}</Text>
  </View> :<View/>;

    return (<View className="order_list_view"
      onClick={this.goOrderDetail.bind(this,item)}>
      <View className="list_view">
        <Image
          className="list_btn_img"
          src={product.image}
        />
        <View className="list_view_right">
          <Text className="intro_text">{product.title}</Text>
          <View className="right_view_middle">
            <Text className="price_text">{`¥${product.price}`}</Text>
            <Text className="origin_price_text">{`¥${product.original_price}`}</Text>
            <View style='display:flex;flex:1' />
            <Text className="count_text"><Text className="count_text1">X</Text>{product.number}</Text>
          </View>
          <View className="right_view_middle">
            {status_text}
            <Text className="freight_text">运费：¥{refunded_price}</Text>
          </View>
        </View>
      </View>
    </View>)
  }
}