'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var Icon = require('FAKIconImage');
var Swiper = require('react-native-swiper');
var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window');

// 类别分组
var Types = React.createClass({
  getInitialState() {
    return { all: [[
        {name: '美食', icon: 'fontawesome|music', bgColor: 'rgb(255,136,34)'},
        {name: '电影', icon: 'fontawesome|home', bgColor: 'rgb(234,102,68)'},
        {name: '酒店', icon: 'fontawesome|bus', bgColor: 'rgb(119,136,242)'},
        {name: 'KTV', icon: 'fontawesome|plug', bgColor: 'rgb(255,136,34)'},
        {name: '新日新单', icon: 'fontawesome|vine', bgColor: 'rgb(42,178,163)'},
        {name: '代金券', icon: 'fontawesome|rebel', bgColor: 'rgb(255,136,34)'},
        {name: '周边游', icon: 'fontawesome|tty', bgColor: 'rgb(102,204,138)'},
        {name: '蛋糕甜点', icon: 'fontawesome|user', bgColor: 'rgb(255,136,34)'}
      ],
      [
        {name: '小吃快餐', icon: 'fontawesome|qq', bgColor: 'rgb(255,136,34)'},
        {name: '休闲娱乐', icon: 'fontawesome|ils', bgColor: 'rgb(234,102,68)'},
        {name: '生活服务', icon: 'fontawesome|ioxhost', bgColor: 'rgb(119,136,242)'},
        {name: '旅游', icon: 'fontawesome|facebook', bgColor: 'rgb(255,136,34)'},
        {name: '足疗按摩', icon: 'fontawesome|twitter', bgColor: 'rgb(42,178,163)'},
        {name: '丽人', icon: 'fontawesome|tint', bgColor: 'rgb(255,136,34)'},
        {name: '婚纱摄影', icon: 'fontawesome|book', bgColor: 'rgb(102,204,138)'},
        {name: '全部分类', icon: 'fontawesome|flag', bgColor: 'rgb(255,136,34)'}
      ]]
    }
  },
  render() {
    var all = this.state.all.map(function(arr){
      var group = arr.map(function(row){
        return (
          <View style={styles.item}>
            <Icon name={row.icon} size={25} color="#fff" style={[styles.icon, {backgroundColor: row.bgColor, borderRadius: 25}]} />
            <Text style={{paddingTop: 5}}>{row.name}</Text>
          </View>
        )
      })
      return (
        <View style={styles.row}>
          <View style={styles.flex}>
            {group.slice(0,4)}
          </View>
          <View style={styles.flex}>
            {group.slice(4)}
          </View>
        </View>
      )
    })

    return (
      <Swiper height="167" index="0" width={width}>
        {all}
      </Swiper>
    )
  }
})

var styles = StyleSheet.create({
  flex: {flexDirection: 'row'},
  row: {marginBottom: 6, backgroundColor: '#fff'},
  block: {flex: 1, padding: 5},
  item: {flex: 1, alignItems: 'center', padding: 5},
  icon: {justifyContent: 'center', width: 50, height: 50},
});

module.exports = Types;
