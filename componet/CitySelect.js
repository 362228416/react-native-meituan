'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var Icon = require('FAKIconImage');

// 搜索栏
var CitySelect = React.createClass({
  render() {
    return (
      <View style={[styles.flex, {paddingBottom: 10}]}>
        <Text style={{color: '#fff', paddingRight: 3, paddingLeft: 3, fontWeight: 'bold'}}>深圳南山区</Text>
        <Icon
          name='fontawesome|chevron-down'
          size={13}
          color='#fff'
          style={{height: 13, width: 13}}
        />
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

module.exports = CitySelect;
