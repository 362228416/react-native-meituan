'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

// 查看所有
var More = React.createClass({
  render() {
    return (
      <View style={[styles.row, styles.item]}>
        <Text style={{color: 'rgb(6,193,174)', padding: 5}}>查看所有团购</Text>
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

module.exports = More;
