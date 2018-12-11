import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { logMsg } from '../../utils/utils';

const baseUrl = 'https://cdn-upyun.deshpro.com/kk/uploads/'
@connect(({ShopDetail}) => ({
  ...ShopDetail,
}))
export default class Shopdetail extends Component {
  config = {
    navigationBarTitleText: 'ShopDetail',
  };

  banners = [
    {
      src: baseUrl + 'banner/a427450bfd8d9c1aec3147abf07e3ce5.png'
    },
    {
      src: baseUrl + 'banner/59167dc4ba75bac58a393634da809e9e.png'
    },
    {
      src: baseUrl + 'banner/43abd55b90359e10435f943e8a2de67a.png'
    }, {
      src: baseUrl + 'banner/2a614a4f08f35e5468030423267e0b8f.png'
    }, {
      src: baseUrl + 'banner/efa0769a1f697e0bf037bb2971fffe43.png'
    }
  ]

  componentDidMount = () => {
    const {dispatch} = this.props;
    dispatch({type:'ShopDetail/effectsDemo'})
  };

  render() {
    logMsg(this)
    let bannerViews = this.banners.map((item, index) => (<SwiperItem key={`banner_${index}`}>
      <View className="banner">
        <Image className="banner"
          src={item.src} />
      </View>
    </SwiperItem>));

    return (
      <View className="ShopDetail-page">
          <Swiper
            className="banner"
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            {bannerViews}
          </Swiper>
          <View className="detail_view">
            <Text className="detail_intro">多端统一开发框架，支持用 React 的开发方式编写一次代码，生成能运行在微信小程序/百度智能小程序/支付宝小程序、H5、React Native 等的应用</Text>
            <View className="info1_view">
              <Text className="price_text">¥288</Text>
              <Text className="begin_price">门市价¥388</Text>
            </View>
            <View className="info2_view">
              <Text className="saled_text">已售：683</Text>
              <Text className="saved_text">库存：0</Text>
            </View>
          </View>

          <Text className="main_info">商家信息</Text>

        <View className="main2_view">
          <View className="info_middle_view">
            <Text className="name1">快乐的鱼</Text>
            <Text className="name2">支持用 React 的开发方式编写一次代码</Text>
          </View>
        </View>

        <Text className="main_info">规格选择</Text>

        <View className="spec_view">
          <View className="spec1_view"  style="margin-right:10px">
            <Text className="spec1_text">基础版</Text>
          </View>
          <View className="spec1_view">
            <Text className="spec1_text">进阶版</Text>
          </View>
        </View>

        ShopDetail
      </View>
    )
  }
}
