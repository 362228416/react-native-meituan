'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

// 各种免费优惠
var Free = React.createClass({
  renderRow(row) {
    return (
      <View style={[styles.flex]}>
        <View style={styles.block}>
          <Text style={{paddingTop: 10, fontSize: row.style == 'big' ? 16 : 14, color: row.color}}>{row.title}</Text>
          <Text style={{paddingTop: 5, fontSize: 12}}>{row.desc}</Text>
        </View>
        <View style={[styles.block,{alignItems: 'flex-end'}]}>
          <Image source={{uri: row.image}} style={{width: row.style == 'big' ? 177 : 65, height: 65}} />
        </View>
      </View>
    )
  },
  render() {
    return (
      <View style={[styles.row]}>
        <View style={styles.block}>
          {this.renderRow({title: '一元吃大餐', desc: '新用户专享', style: 'big', color: 'rgb(255,127,96)', image: 'http://p1.meituan.net/280.0/groupop/b49185c18b5ddfb32a5c1e78dd4f18c254968.jpg'})}
        </View>
        <View style={{height: 1, backgroundColor: '#f3f3f3'}}/>
        <View style={[]}>
          <View style={[styles.flex]}>
            <View style={styles.block}>{this.renderRow({title: '一元肯德基', desc: '新用户专享', color: 'rgb(234,102,68)', image: 'http://p0.meituan.net/280.0/groupop/2ccf688380a03083c071362693e570f620691.png'})}</View>
            <View style={{height: 70, width: 1, backgroundColor: '#f3f3f3'}}/>
            <View style={styles.block}>{this.renderRow({title: '唱到天亮', desc: '最高立减15元', color: 'rgb(249,155,93)', image: 'http://p0.meituan.net/280.0/groupop/d715a19a85e8d22ba93966f2516f166a19385.png'})}</View>
          </View>
          <View style={{height: 1, backgroundColor: '#f3f3f3'}}/>
          <View style={[styles.flex]}>
            <View style={styles.block}>{this.renderRow({title: '周边游放价', desc: '暑期减不停', color: 'rgb(107,189,0)', image: 'http://p0.meituan.net/280.0/groupop/28020c026d9e283e7db3f27f3ee1f97e18765.png'})}</View>
            <View style={{height: 70, width: 1, backgroundColor: '#f3f3f3'}}/>
            <View style={styles.block}>{this.renderRow({title: '全场免费！', desc: '霸王餐只送不卖', color: 'rgb(118,235,118)', image: 'http://p1.meituan.net/280.0/groupop/3dd24c48c72c3cf9f3232bfa9ada6aa016757.jpg'})}</View>
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

module.exports = Free;
