import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { logMsg,strNotNull } from '../../utils/utils';
import {getMallList} from '../../service/Mall';
import default_img from '../../images/mine/empty_ticket.png';

const baseUrl = 'https://cdn-upyun.deshpro.com/kk/uploads/'
@connect(({ mall }) => ({
  ...mall,
}))
export default class mall extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mall_list:[]
    }
  }

  config = {
    navigationBarTitleText: "折扣",
    enablePullDownRefresh:true
  };

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/effectsDemo'
    })

    getMallList({page:1,page_size:20}, ret=>{
      logMsg("商品折扣列表：",ret)
      this.setState({
        mall_list:ret.items
      })
    })
  };

  toLogin = ()=>{
    Taro.navigateTo({url:'/pages/Login/index'})
  }


  render() {
    const {mall_list} = this.state;
    return (
      <ScrollView
        scrollY
      >
        <View className="home-page">

        {mall_list.map((item,index)=>{
          const {all_stock,category_id,first_discounts,icon,id,intro,original_price,price,returnable,title} = item;
          return(
            <View
            onClick={this.toLogin}
            key={index}
            className="item">

            {/* <View className="tag_count_down">
              <Text className="txt">10:35:09</Text>
            </View> */}

            {returnable?<View className="tag_shop">
              <Text className="txt">抢购中</Text>
            </View>:<View/>}

            <Image className="cover"
              mode="widthFix"
              style="height:300px;width:100%"
              src={strNotNull(icon)?icon:default_img} />

            <Text className="title">{intro}</Text>

            <View className="line" />
            <View className="info">
              <Text className="price">¥ {price}</Text>
              <Text className="price2">门店价:¥{original_price}</Text>
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
