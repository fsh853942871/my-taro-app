import { Component } from "react";
import { View, Text, Button, Map } from "@tarojs/components";
import "./index.scss";
import Taro, { eventCenter, options, getCurrentInstance } from "@tarojs/taro";
import Child from "./component/child1";
// import { AtTabBar } from "taro-ui";

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
  onReachBottom() {
    console.log("onReachBottom");
  }

  onAddToFavorites(Object) {
    console.log("onAddToFavorites");
    console.log(Object);
  }

  onTabItemTap(Object) {
    console.log(Object);
  }

  clickHandler = () => {
    console.log("clickHandler");
  };

  onTap = () => {
    console.log("onTap");
  };

  render() {
    return (
      <View className="index">
        <Text>qwe</Text>
        <Button onClick={this.clickHandler}>123</Button>
        <Map onClick={this.onTap} />
        <Child />
      </View>
    );
  }
}
