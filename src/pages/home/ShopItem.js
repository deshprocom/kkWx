import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import './index.scss';
import { AtCountDown } from 'taro-ui'
import { logMsg, dateFormat } from '../../utils/utils';


export default class ShopItem extends Component {

  goDetailPage = (e) => {
    Taro.navigateTo(e.currentTarget.dataset)
  }

  dayHour = (millis) => {
    let minute = 60;
    let hour = minute * 60;
    let day = hour * 24;
    if (millis < 0)
      return

    let dayC = millis / day
    let hourC = millis / hour
    let minC = millis / minute

    logMsg(`${dayC} 天 ${hour} 时 ${minC} 分`)
  }

  render() {
    let curDate = new Date()
    let curTimes = Math.round(curDate.getTime() / 1000)

    const { icon, title, original_price, price,
      product_id, returnable, saleable_num, sales_volume,
      end_time, begin_time } = this.props.item;
    logMsg(`begin_time ${dateFormat(begin_time)}`)
    logMsg(`end_time ${dateFormat(end_time)}`)
    let diff = curTimes - begin_time
    logMsg("当前时间", diff)
    let canBuyStr = "距离结束"
    if (diff > 0) {
      canBuyStr = `距离开始`
    } else {
      diff = curTimes - end_time
      if (diff > 0) {
        canBuyStr = `已结束`
      } else {
        diff = Math.abs(diff)
      }
    }

    return (<View className="item" data-url="/pages/ShopDetail/index" onClick={this.goDetailPage}>
      <View className="content">
        <View className="tag_count_down">
          <Text style={"color:#fff;"}>{canBuyStr}</Text>
          <AtCountDown
            style={"color:#fff;"}
            isShowDay
            format={{ day: '天', hours: '时', minutes: '分', seconds: '秒' }}
            seconds={diff} />
        </View>

        {/* <View className="tag_shop">
              <Text className="txt">抢购中</Text>
            </View> */}

        <Image className="cover"
          mode="widthFix"
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