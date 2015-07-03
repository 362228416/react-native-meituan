'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TextInput,
  Text,
  View,
} = React;

var Icon = require('FAKIconImage');
var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window');

// 搜索栏
var SearchBar = React.createClass({
  render() {
    return (
      <View style={{paddingBottom: 2, left: 23}}>
        <View style={{top: 20, left: 5, height: 15}}>
          <Icon name="fontawesome|search" size={20} color="#fff" style={styles.icon} />
        </View>
        <TextInput
          placeholder="请输入商家、品类、商圈"
          style={{height: 30, borderColor: 'transparent', paddingLeft: 27, backgroundColor: 'rgba(0,0,0,.15)', borderRadius: 10, color: '#68dbce', fontSize: 15, borderWidth: 0, width: width - 140}}
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
  icon: {justifyContent: 'center', color: "#900", width: 20, height: 20},
});

module.exports = SearchBar;
