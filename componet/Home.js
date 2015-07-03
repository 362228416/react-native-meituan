'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Navigator,
  Component,
  ScrollView,
  View,
} = React;

var NavigationBar = require('react-native-navbar');
var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window');

// 类别分组
var Types = require('./Types');

// 上门服务
var Service = require('./Service');

// 上门服务下面那块
var Kfc = require('./Kfc');

// 各种免费优惠
var Free = require('./Free');

// 猜你喜欢
var YouLike = require('./YouLike');

// 查看所有
var More = require('./More');

// 搜索栏
var SearchBar = require('./SearchBar');

// 右上角图标
var MyIcon = require('./MyIcon');

// 城市选择
var CitySelect = require('./CitySelect');

// 主页
var HomeContent = React.createClass({
  render() {
    return (
      <ScrollView style={{backgroundColor: '#f3f3f3', height: height - 66}}>
        <Types/>
        <Service/>
        <Kfc/>
        <Free/>
        <YouLike/>
        <More/>
      </ScrollView>
    )
  }
})

// 美团客户端
var Home = React.createClass({
  renderScene: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;
    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }
    return (
      <View style={styles.navigator}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  },
  render: function() {
    return (
      <Navigator
          renderScene={this.renderScene}
          initialRoute={{
            component: HomeContent,
            navigationBar: <NavigationBar
              backgroundColor='rgb(6,193,174)'
              title="美团团购"
              customPrev={<CitySelect/>}
              customTitle={<SearchBar/>}
              customNext={<MyIcon/>}
            />
          }}
        />
    )
  }
});

var styles = StyleSheet.create({
  flex: {flexDirection: 'row'},
  row: {marginBottom: 6, backgroundColor: '#fff'},
  block: {flex: 1, padding: 5},
  item: {flex: 1, alignItems: 'center', padding: 5},
  icon: {justifyContent: 'center', color: "#900", width: 50, height: 50},
});

module.exports = Home;
