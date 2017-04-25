import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import MineCell from './MineCell';

export default class Order extends Component {
    render() {
        return (
            <View style={styles.container}>
				<MineCell leftIcon={require('../../andres/collect.png')} leftTitle="我的订单" rightTitle="查看全部订单"></MineCell>
				<View style={styles.itemWraper}>
					{this.renderItem()}
				</View>
            </View>
        );
    }

	renderItem(){

		const config = [
			{
				source:require('../../andres/order1.png'),
				text:'待付款'
			},
			{
				source:require('../../andres/order2.png'),
				text:'待使用'
			},
			{
				source:require('../../andres/order3.png'),
				text:'待评价'
			},
			{
				source:require('../../andres/order4.png'),
				text:'退款/售后'
			},
		];

		const viewArr = [];

		for (const item of config) {
			viewArr.push(
				<TouchableOpacity key={item.text}>
					<View style={styles.itemView}>
						<Image
							source={item.source}
							style={styles.itemImage}
						></Image>
						<Text>{item.text}</Text>
					</View>
				</TouchableOpacity>
			);
		}

		return viewArr;
	}
}

const styles = StyleSheet.create({
    itemWraper: {
		flexDirection:'row',
		justifyContent: 'space-between',
		marginLeft:20,
		marginRight:20,
    },
	itemImage:{
		width:50,
		height:50
	},
	itemView:{
		alignItems:'center'
	},
	container:{
		borderBottomColor:'#ddd',
		borderBottomWidth:0.5,
		paddingBottom:10,
        backgroundColor:'white'
	}
});
