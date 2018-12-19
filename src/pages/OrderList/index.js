import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { AtTabs, AtTabsPane } from 'taro-ui'
import OrderItem from '../../components/order/OrderItem'
import { logMsg } from '../../utils/utils';
@connect(({ OrderList }) => ({
  ...OrderList,
}))
export default class Orderlist extends Component {

  constructor(props) {
    super(props)
    let params = this.$router.params
    logMsg('参数', params)
    let initTab = parseInt(params.initTab)
    this.state = {
      dfkPage: 1,
      dsyPage: 1,
      ywcPage: 1,
      appPage: 1,
      dfkList: [1, 2, 3, 5, 6],
      dsyList: [1, 2, 3, 5, 6],
      ywcList: [1, 2, 3, 5, 6],
      allList: [1, 2, 3, 5, 6],
      currentTab: initTab ? initTab : 0,//代付款 0 待使用 1 已完成 2 全部订单 3
    }
  }

  config = {
    navigationBarTitleText: 'OrderList',
  };


  componentDidMount = () => {

  };

  handleClick(stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  render() {
    const { currentTab, dfkList, dsyList, ywcList, allList } = this.state;
    const tabList = [{ title: '代付款' }, { title: '待使用' }, { title: '已完成' }, { title: '全部订单' }]

    return (
      <View className="OrderList-page">
        <AtTabs
          current={currentTab}
          tabList={tabList}
          style="width:100%;"
          onClick={this.handleClick.bind(this, 'currentTab')}>
          <AtTabsPane current={currentTab} index={0} >
            {dfkList.map((item, index) =>
              (<OrderItem key={`dfk_${index}`} />))}

          </AtTabsPane>
          <AtTabsPane current={currentTab} index={1}>
            {dsyList.map((item, index) =>
              (<OrderItem key={`dsy_${index}`} />))}

          </AtTabsPane>
          <AtTabsPane current={currentTab} index={2}>
            {ywcList.map((item, index) =>
              (<OrderItem key={`ywc_${index}`} />))}

          </AtTabsPane>
          <AtTabsPane current={currentTab} index={3}>
            {allList.map((item, index) =>
              (<OrderItem key={`all_${index}`} />))}

          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
