import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { logMsg } from '../../utils/utils';
import ShopItem from './ShopItem';
import { getOneBuysList } from './service'

const baseUrl = 'https://cdn-upyun.deshpro.com/kk/uploads/'
const LOADMORE = "loadmore"
const REFRESH = "refresh"
@connect(({ home }) => ({
  ...home,
}))
export default class Home extends Component {
  config = {
    navigationBarTitleText: '1元购',
    enablePullDownRefresh: true,

  };

  state = {
    goingPage: 1,
    pastPage: 1,
    listType: 'going',//going 进行中的列表，past 往期一元购列表
    goingList: [],
    pastList: []
  }

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

  };


  refreshLoad = (pullType) => {

    let { goingPage, goingList, pastList, pastPage, listType } = this.state

    let params = { page: 1, page_size: 20, type: listType }
    if (pullType === LOADMORE) {
      if (listType === 'past') {
        params.page = pastPage
      } else if (listType === "going") {
        params.page = goingPage
      }
    }
    getOneBuysList(params, data => {
      logMsg('一元购数据', data)
      Taro.stopPullDownRefresh()
      if (params.type === 'going') {
        goingPage++
        let list = data.items
        if (pullType === LOADMORE)
          list = goingList.concat(data.items)
        logMsg('一元购数据List', list)
        this.setState({
          goingPage,
          goingList: list
        })
      }
    }, err => {
      logMsg('一元购数据错误', err)
    })
  }



  onPullDownRefresh = () => {
    logMsg('下拉刷新')
    this.refreshLoad()
  }

  onReachBottom = () => {
    logMsg('底部刷新')
    this.refreshLoad("loadmore")

  }


  render() {
    logMsg('home', this)
    let bannerViews = this.banners.map((item, index) => (<SwiperItem key={`banner_${index}`}>
      <View className="banner">
        <Image className="banner"
          src={item.src} />
      </View>
    </SwiperItem>))
    return (
      <ScrollView
        scrollY
        lowerThreshold={10}
      >
        <View className="home-page">
          <Swiper
            className="banner"
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            {bannerViews}
          </Swiper>

          <View className="top_bar">
            <View className="btn" ß>
              <Text className="active">正在进行</Text>
            </View>
            <View className="div_line" />
            <View className="btn">
              <Text>往前回顾</Text>
            </View>

          </View>
          {this.banners.map((item, index) =>
            (<ShopItem
              key={`shop_${index}`}
              item={item} />))}
          <View style="margin-bottom:20px;"></View>
        </View>
      </ScrollView>
    )
  }


}
