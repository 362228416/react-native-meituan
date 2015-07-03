'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var Icon = require('FAKIconImage');

// 右上角图标
var MyIcon = React.createClass({
  render() {
    return (
      <View style={{paddingRight: 8}}>
        <View style={{paddingLeft: 3}}>
          <Icon
            name='fontawesome|user'
            size={20}
            color='#fff'
            style={{height: 20, width: 20}}
          />
        </View>
        <Text style={{color:'#fff'}}>我的</Text>
      </View>
    );
  }
})

var styles = StyleSheet.create({
  flex: {flexDirection: 'row'},
  row: {marginBottom: 6, backgroundColor: '#fff'},
  block: {flex: 1, padding: 5},
  item: {flex: 1, alignItems: 'center', padding: 5},
  icon: {justifyContent: 'center', color: "#900", width: 50, height: 50},
});

module.exports = MyIcon;
