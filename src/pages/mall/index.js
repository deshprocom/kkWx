import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { logMsg } from '../../utils/utils';

const baseUrl = 'https://cdn-upyun.deshpro.com/kk/uploads/'
@connect(({ mall }) => ({
  ...mall,
}))
export default class mall extends Component {
  config = {
    navigationBarTitleText: "折扣",
    enablePullDownRefresh:true
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
    const { dispatch } = this.props
    dispatch({
      type: 'home/effectsDemo'
    })
  };

  toLogin = ()=>{
    Taro.navigateTo({url:'/pages/Login/index'})
  }


  render() {

    return (
      <ScrollView
        scrollY
      >
        <View className="home-page">
           
          {this.banners.map((item, index) => (<View
            onClick={this.toLogin}
            key={index}
            className="item">

            {/* <View className="tag_count_down">
              <Text className="txt">10:35:09</Text>
            </View> */}

            <View className="tag_shop">
              <Text className="txt">抢购中</Text>
            </View>

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
          </View>))}

          <View style="margin-bottom:20px;"></View>
        </View>
      </ScrollView>
    )
  }


}
