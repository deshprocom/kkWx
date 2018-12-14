import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import './index.scss';
const baseUrl = 'https://cdn-upyun.deshpro.com/kk/uploads/'

export default class ShopItem extends Component{

      render(){
            return (<View className="item">
                  <View className="content">
            <View className="tag_count_down">
              <Text className="txt">10:35:09</Text>
            </View>

            {/* <View className="tag_shop">
              <Text className="txt">抢购中</Text>
            </View> */}

            <Image className="cover"
              mode="widthFix"
              src={baseUrl + 'info/fb7f15abf27937b26fa1cedfd602685b.png!md'} />

            <Text className="title">澳门三天两夜家庭亲子旅游套餐（四人）阿斯顿接口和阿克苏结合地方阿三开的回复阿哈开始剪短发阿什顿饭卡升级换代分阿什顿发生的符合健康</Text>

            <View className="line" />
            <View className="info">
              <Text className="price">¥ 89.9</Text>
              <Text className="price2">门店价:¥189.9</Text>
              <View className="space" />
              <Text>销售量：288</Text>
            </View>
          </View>
            </View>)
      }
}