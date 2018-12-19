import Taro, { Component } from '@tarojs/taro';
import { View, Text, RichText } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { logMsg, isObjEmpty, urlEncode } from '../../utils/utils'

const baseUrl = 'https://cdn-upyun.deshpro.com/kk/uploads/';

export default class Shopdetail extends Component {

      state = {
            index: 0,
            showMore: false
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




      onPress1 = () => {
            this.setState({
                  index: 1
            })
      }
      onPress2 = () => {
            this.setState({
                  index: 1
            })
      }

      goOrderPay(id, e) {
            let url = e.currentTarget.dataset.url + `?${urlEncode({ id })}`
            Taro.navigateTo({ url })
      }

      moreMessage = () => {
            this.setState({
                  showMore: !this.state.showMore
            })
      }

      render() {
            const { shopDetail } = this.props;

            const { category_id, description, first_discounts, freight_fee, has_variants,
                  icon, id, images, intro, master, option_types, returnable, title, variants } = shopDetail.product
            const { original_price, price, stock } = master
            let bannerViews = images && images.map((item, index) => (<SwiperItem key={`banner_${index}`}>
                  <View className="banner">
                        <Image className="banner"
                              src={item.large} />
                  </View>
            </SwiperItem>));

            let more_message = [{}, {}, {}].map((item, index) => {
                  <View className="info_middle_view">
                        <Text className="name1">快乐的鱼</Text>
                        <Text className="name2">支持用 React 的开发方式编写一次代码</Text>
                  </View>
            })

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
                              <Text className="detail_intro">{title}</Text>
                              <View className="info1_view">
                                    <Text className="price_text">{`¥${price}`}</Text>
                                    <Text className="begin_price">{`门市价¥${original_price}`}</Text>
                              </View>
                              <View className="info2_view">
                                    <Text className="saled_text">已售：683</Text>
                                    <Text className="saved_text">{`库存：${stock}`}</Text>
                              </View>
                        </View>

                        <Text className="main_info">规格选择</Text>

                        <View className="spec_view">
                              <View className="spec1_view" style="margin-right:10px" onClick={this.onPress1}>
                                    <Text className="spec1_text">基础版</Text>
                              </View>
                              <View className="spec1_view" onClick={this.onPress2}>
                                    <Text className="spec1_text">进阶版</Text>
                              </View>
                        </View>

                        <View className="main_info_view">
                              <Text className="main_info_text">商家信息</Text>
                              <View onClick={this.moreMessage}>
                                    <Text className="more_info">更多信息</Text>
                              </View>
                        </View>

                        <View className="main2_view">
                              <View className="info_middle_view">
                                    <Text className="name1">快乐的鱼</Text>
                                    <Text className="name2">支持用 React 的开发方式编写一次代码</Text>
                              </View>
                              {this.state.showMore ? more_message : null}
                        </View>
                        <Text className="main_info">详细信息</Text>

                        <View className="des_view">
                              <RichText className="des_text" nodes={description} />
                        </View>

                        <View className="bottom_view">
                              <View className="btn_view">
                                    <Text className="btn_text">商城首页</Text>
                              </View>
                              <View className="btn_view">
                                    <Text className="btn_text">咨询客服</Text>
                              </View>
                              <View data-url='/pages/OrderPay/index'
                                    onClick={this.goOrderPay.bind(this, id)}
                                    className="btn_view  btn3_view">
                                    <Text className="btn_text">已售罄</Text>
                              </View>
                        </View>
                  </View>
            )
      }
}