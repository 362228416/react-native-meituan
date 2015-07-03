'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

// 上门服务
var Service = React.createClass({
  render() {
    return (
      <View style={[styles.row, styles.flex, {padding: 10}]}>
        <Image source={{uri: 'http://ms0.meituan.net/touch/img//icon-sm.png'}} style={{width: 40, height: 40}} />
        <View style={{paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>上门服务</Text>
          <Text style={{color: '#BFBFBF', fontSize: 14, marginTop: 6}}>保洁</Text>
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

module.exports = Service;
