import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { logMsg } from '../../utils/utils';

@connect(({home}) => ({
  ...home,
}))
export default class Home extends Component {
  config = {
    navigationBarTitleText: 'home',
  };

  componentDidMount = () => {
     const {dispatch} = this.props
     dispatch({
       type:'home/effectsDemo'
     })
  };

  render() {
    logMsg(this)
    return (
      <View className="home-page">
        home
      </View>
    )
  }
}
