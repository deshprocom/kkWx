import Taro, { Component } from '@tarojs/taro';
import { View, Text, RichText } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { logMsg, isObjEmpty, urlEncode, loginUser, toLoginPage } from '../../utils/utils'
import classNames from 'classnames';
import default_img from '../../images/mine/default_img.png';
import empty_img from '../../images/mine/empty_ticket.png';
import close_img from '../../images/mine/close.png';
import call_img from '../../images/tab/call_bg.png';
import location_img from '../../images/tab/location.png';


const baseUrl = 'https://cdn-upyun.deshpro.com/kk/uploads/';

export default class Shopdetail extends Component {


      state = {
            index: 0,
            showMore: false,
            isOpened: false
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


      handleTouchMove = e => {
            e.stopPropagation()
      }

      onPress1 = () => {
            this.setState({
                  isOpened: !this.state.isOpened
            })
      }
      onPress2 = () => {
            this.setState({
                  index: 1
            })
      }



      goOrderPay(title, variants, e) {

            if (loginUser) {
                  let select = variants[0]
                  select.title = title
                  let url = e.currentTarget.dataset.url + `?${urlEncode(select)}`
                  logMsg('预支付', url)
                  Taro.navigateTo({ url })
            } else {
                  toLoginPage()
            }

      }

      moreMessage = () => {
            this.setState({
                  showMore: !this.state.showMore
            })
      }

      goBack = () => {
            Taro.navigateBack({ delta: 1 })
      }

      render() {
            const { shopDetail } = this.props;
            const { category_id, description, first_discounts, freight_fee, has_variants,
                  icon, id, images, intro, master, option_types, returnable, title, variants,merchant } = shopDetail.product
            const { original_price, price, stock } = master;

            let bannerViews = images && images.map((item, index) => (<SwiperItem key={`banner_${index}`}>
            <View className="banner">
                  <Image className="banner"
                        src={item.large} />
            </View>
            </SwiperItem>));

            let swiper_img=isObjEmpty(images)?<View className="banner">
            <Image className="banner"
                  src={empty_img} />
            </View>:<Swiper
                              className="banner"
                              indicatorColor='#999'
                              indicatorActiveColor='#333'
                              circular
                              indicatorDots
                              autoplay>
                              {bannerViews}
                        </Swiper>;
            


            let select_message = [{}, {}, {}].map((item, index) => {
                  <View className="name1_text_view">
                        <Text className="name1_text">免坐</Text>
                  </View>
            })

            return (
                  <View className="ShopDetail-page">
                        {swiper_img}
                        <View className="detail_view">
                              <Text className="detail_intro">{title}</Text>
                              <View className="info1_view">
                                    <Text className="begin_price">{`门市价¥${original_price}`}</Text>
                              </View>
                              <View className="info2_view">
                                    <Text className="price_text">{`¥${price}`}</Text>
                                    <Text className="saved_text">{`已卖出：${stock}份`}</Text>
                              </View>
                        </View>

                        {/* <Text className="main_info">规格选择</Text>

                        <View className="spec_view">
                              <View className="spec1_view" style="margin-right:10px" onClick={this.onPress1}>
                                    <Text className="spec1_text">点击这里弹窗</Text>
                              </View>
                              <View className="spec1_view" onClick={this.onPress2}>
                                    <Text className="spec1_text">进阶版</Text>
                              </View>
                        </View> */}

                        <View className="main_info_view">
                              <Text className="main_info_text">商家信息</Text>
                        </View>

                        <View className="main2_view">
                              <Image className="location_img" src={location_img}/>
                              <View className="info_middle_left_view">
                                    <Text className="name1">{merchant.name}</Text>
                                    <Text className="name2">{merchant.location}</Text>
                              </View>
                              <View style='display:flex;flex:1;'/>
                              <Image className="call_img" src={call_img}/>
                        </View>
                        <Text className="main_info">详细信息</Text>

                        <View className="des_view">
                              <RichText className="des_text" nodes={description} />
                        </View>

                        <View className="bottom_view">
                              <View
                                    onClick={this.goBack}
                                    className="btn_view">
                                    <Text className="btn_text">商城首页</Text>
                              </View>
                              <View className="btn_view">
                                    <Text className="btn_text">咨询客服</Text>
                              </View>
                              <View data-url='/pages/OrderPay/index'
                                    onClick={this.goOrderPay.bind(this, title, variants)}
                                    className="btn_view  btn3_view">
                                    <Text className="btn_text1">立即购买</Text>
                              </View>
                        </View>

                        {this.state.isOpened ? <View className='at-action-sheet--active'
                              onTouchMove={this.handleTouchMove}>
                              <View onClick={this.onPress1} className='at-action-sheet__overlay' />
                              <View className='at-action-sheet__container'>
                                    <Image className="default_img" src={default_img} />
                                    <View className="top_right_view">
                                          <Text className="top_price_text">3125.0</Text>
                                          <Text className="kucun_text">库存15件</Text>
                                    </View>
                                    <Image onClick={this.onPress1} className="close_img" src={close_img} />
                                    <View style="width:100%;height:2px;background-color:#F3F3F3;margin-top:20px;" />
                                    <Text className="name1_text">阿尔法七座商务车</Text>
                                    <View className="name1_view">
                                          {select_message}
                                    </View>

                                    <View className="confirm_btn">
                                          <Text className="confirm_text">确认</Text>
                                    </View>
                              </View>
                        </View> : null}
                  </View>
            )
      }
}