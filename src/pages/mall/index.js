import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { logMsg, strNotNull,urlEncode } from '../../utils/utils';
import { getMallList } from '../../service/Mall';
import default_img from '../../images/mine/empty_ticket.png';

const baseUrl = 'https://cdn-upyun.deshpro.com/kk/uploads/'
const LOADMORE = "loadmore"
const REFRESH = "refresh"
@connect(({ mall }) => ({
  ...mall,
}))
export default class mall extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mall_list: [],
      page: 1,
    }
  }

  config = {
    navigationBarTitleText: "折扣",
    enablePullDownRefresh: true
  };

  componentDidMount = () => {

    this.refreshLoad(REFRESH)
  }

  refreshLoad = (pullType) => {
    let { mall_list, page } = this.state

    let params = { page, page_size: 20 }


    getMallList(params, ret => {
      Taro.stopPullDownRefresh()
      if (ret && ret.items && ret.items.length > 0) {
        page++
        let list = ret.items
        if (pullType === LOADMORE)
          list = mall_list.concat(data.items)
        logMsg("商品折扣列表：", list)

        this.setState({
          mall_list: list
        })
      }

    })
  }

  toLogin = () => {
    Taro.navigateTo({ url: '/pages/Login/index' })
  }

  onPullDownRefresh = () => {
    logMsg('下拉刷新')
    this.refreshLoad(REFRESH)
  }

  onReachBottom = () => {
    logMsg('底部刷新')
    this.refreshLoad(LOADMORE)
  }

  goDetailPage(product_id, e) {
    logMsg(e, product_id)
    let url = e.currentTarget.dataset.url + `?${urlEncode({ product_id })}`
    Taro.navigateTo({ url })
  }

  render() {
    const { mall_list } = this.state;
    return (
      <ScrollView
        scrollY
      >
        <View className="home-page">

          {mall_list.map((item, index) => {
            const { all_stock, category_id, first_discounts, icon, id, intro, original_price, price, returnable, title } = item;
            return (
              <View
                data-url="/pages/ShopDetail/index"
                onClick={this.goDetailPage.bind(this, id)}
                key={index}
                className="item">

                {/* <View className="tag_count_down">
              <Text className="txt">10:35:09</Text>
            </View> */}

                {returnable ? <View className="tag_shop">
                  <Text className="txt">抢购中</Text>
                </View> : <View />}

                <Image className="cover"
                  mode="widthFix"
                  style="height:300px;width:100%"
                  src={strNotNull(icon) ? icon : default_img} />

                <Text className="title">{intro}</Text>

                <View className="line" />
                <View className="info">
                  <Text className="price">¥ {price}</Text>
                  <Text className="price2">门市价:¥{original_price}</Text>
                  <View className="space" />
                  <Text>销售量：{all_stock}</Text>
                </View>
              </View>
            )
          })}

          <View style="margin-bottom:20px;"></View>
        </View>
      </ScrollView>
    )
  }


}
