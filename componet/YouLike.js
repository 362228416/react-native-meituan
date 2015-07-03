'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ListView,
  Image,
  Text,
  View,
} = React;

// 猜你喜欢
var YouLike = React.createClass({
  getInitialState() {
    var data = [
      {name: '光明香盈乳鸽', desc: '[4店通用]乳鸽套餐，1人餐', price: '26', price2: '40', image: 'http://p0.meituan.net/200.0/deal/f811283d112b291c08014f6919cdf56f90849.jpg', sale: 414},
      {name: '紫燕百味鸡', desc: '[35店通用]20元代金券1张，可叠加 6.20不可用', price: '17', price2: '10', image: 'http://p0.meituan.net/200.0/deal/50ba40f7711ecbb96eac1d5c56aff3cd102771.jpg', sale: 76896},
      {name: '溜达通信店', desc: '[37店通用]流量包（100M）1次', price: '5', price2: '10', image: 'http://p0.meituan.net/200.0/deal/075636ca27bcb706594333c3cc7ccb0e33161.jpg', sale: 2455},
      {name: '哈哈镜', desc: '[东门]哈哈镜赠品1盒，赠品包含哈哈镜3大品类：鸭系类、海鲜、素菜1盒', price: '1', price2: '18', image: 'http://p0.meituan.net/200.0/deal/f2d585cee3dc84aad5e0928b87f6d5de28064.jpg', sale: 1382}
    ]
    return {dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(data)}
  },
  renderRow(row, t, i) {
    return (
      <View key={i} style={styles.flex}>
        <View style={[styles.flex, {flex: 7}]}>
          <View style={{padding: 10}}><Image style={{height: 60, width: 60}} source={{uri: row.image}}/></View>
          <View>
            <Text style={{paddingTop: 10}}>{row.name}</Text>
            <Text style={{paddingTop: 8, fontSize: 12}}>{row.desc}</Text>
            <View style={[styles.flex, {paddingTop: 5}]}>
              <Text style={{fontSize: 13}}>{row.price}元</Text>
              <Text style={{fontSize: 11, paddingTop: 3}}>  {row.price2}元</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 3, alignItems: 'flex-end'}}>
          <Text style={{fontSize: 12, paddingTop: 54, paddingRight: 5}}>已售{row.sale}</Text>
        </View>
      </View>
    )
  },
  render() {
    return (
      <ListView
        style={styles.row}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
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

module.exports = YouLike;
