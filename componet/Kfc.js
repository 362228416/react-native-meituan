'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

// 上门服务下面那块
var Kfc = React.createClass({
  render() {
    return (
      <View style={[styles.row, styles.flex]}>
        <View style={[{flex: 3}]}>
          <View style={[styles.item]}>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={{color: 'green', fontWeight: 'bold', paddingTop: 30}}>我们约会吧</Text>
              <Text style={{color: 'rgb(102,102,116)', fontSize: 14, paddingTop: 10}}>恋人家人好朋友</Text>
            </View>
            <View>
              <Image source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}} style={{width: 88, height: 88}} />
            </View>
          </View>
        </View>
        <View style={{height: 180, top: 8, width: 1, backgroundColor: '#f3f3f3'}}/>
        <View style={[{flex: 6}]}>
          <View style={[styles.flex, {alignItems: 'center', justifyContent: 'center', padding: 10}]}>
            <View>
              <Text style={{color: 'rgb(255,63,96)', fontWeight: 'bold', paddingTop: 5}}>低价超值</Text>
              <Text style={{color: 'rgb(102,102,116)', fontSize: 14, paddingTop: 5}}>十元惠生活</Text>
            </View>
            <Image source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}} style={{width: 85, height: 65}} />
          </View>
          <View style={{height: 1, backgroundColor: '#f3f3f3'}}/>
          <View style={[styles.flex, {alignItems: 'center', justifyContent: 'center', padding: 5}]}>
            <View style={styles.item}>
              <Text style={{color: 'rgb(247,95,168)', fontWeight: 'bold', paddingTop: 5}}>午后时光</Text>
              <Text style={{color: 'rgb(102,102,116)', fontSize: 14, paddingTop: 5}}>懒懒下午茶</Text>
              <Image source={{uri: 'http://p0.meituan.net/mmc/dfa8039a207553b414db7b32614109cb7779.png'}} style={{width: 44, height: 44}} />
            </View>
            <View style={{height: 100, width: 1, backgroundColor: '#f3f3f3'}}/>
            <View style={styles.item}>
              <Text style={{color: 'rgb(255,134,1)', fontWeight: 'bold', paddingTop: 5}}>名店抢购</Text>
              <Text style={{color: 'rgb(102,102,116)', fontSize: 14, paddingTop: 5}}>已结算</Text>
              <Text style={{paddingTop: 5}}>02:50:11</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  flex: {flexDirection: 'row'},
  row: {marginBottom: 6, backgroundColor: '#fff'},
  block: {flex: 1, padding: 5},
  item: {flex: 1, alignItems: 'center', padding: 5},
  icon: {justifyContent: 'center', color: "#900", width: 50, height: 50},
});

module.exports = Kfc;
