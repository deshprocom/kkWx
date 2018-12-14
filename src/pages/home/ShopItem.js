import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import './index.scss';
const baseUrl = 'https://cdn-upyun.deshpro.com/kk/uploads/'

export default class ShopItem extends Component {

  goDetailPage = (e) => {
    Taro.navigateTo(e.currentTarget.dataset)
  }

  render() {
    const { icon, title, original_price, price, product_id, returnable, saleable_num, sales_volume } = this.props.item;
    return (<View className="item" data-url="/pages/ShopDetail/index" onClick={this.goDetailPage}>
      <View className="content">
        <View className="tag_count_down">
          <Text className="txt">10:35:09</Text>
        </View>

        {/* <View className="tag_shop">
              <Text className="txt">抢购中</Text>
            </View> */}

        <Image className="cover"
          mode="scaleToFill"
          src={icon} />

        <Text className="title">{title}</Text>

        <View className="line" />
        <View className="info">
          <Text className="price">{`¥ ${price}`}</Text>
          <Text className="price2">{`门店价:¥${original_price}`}</Text>
          <View className="space" />
          <Text>{`销售量：${sales_volume}`}</Text>
        </View>
      </View>
    </View>)
  }
}