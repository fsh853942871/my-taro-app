import { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import Taro, { eventCenter, options, getCurrentInstance } from "@tarojs/taro";

export default class Index extends Component {
  $instance = getCurrentInstance();

  componentWillMount() {
    console.log(process.env.TARO_ENV);
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log(options);
    console.log(this.$instance.router);
  }
  componentWillUnmount() {
    console.log("componentDidShow");
  }

  // onLoad
  onLoad() {
    console.log("onLoad");
  }
  // onReady
  onReady() {
    console.log("onReady");
  }

  componentDidShow() {
    console.log("componentDidShow");
  }
  componentDidHide() {
    console.log("componentDidHide");
  }

  // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
  // 所有页面生命周期函数名都与小程序相对应
  onPullDownRefresh() {
    console.log("onPullDownRefresh");
  }

  render() {
    return (
      <View className="index">
        <Text>child1</Text>
      </View>
    );
  }
}
