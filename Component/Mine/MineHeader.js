import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

export default class MainHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.viewWraper,styles.topInfoWraper]}>
					<View style={styles.topInfo}>
						<Image
							source={require('../../andres/see.png')}
							style={[styles.topImage,styles.nameImage]}
						></Image>
						<Text>赖宝</Text>
						<Image
							source={require('../../andres/avatar_vip.png')}
							style={styles.topImage}
						></Image>
					</View>
					<View style={styles.bottomInfo}>
						<Image
							source={require('../../andres/icon_cell_rightarrow.png')}
							style={styles.topImage}
						></Image>
					</View>
				</View>
				<View style={styles.viewWraper}>
					{this.renderBottom()}
				</View>
            </View>
        );
    }

	renderBottom(){
		const config = [
			{
				num:100,
				text:'购物券'
			},
			{
				num:12,
				text:'评价'
			},{
				num:50,
				text:'收藏'
			}
		];

		const viewArr = [];

		for (const item of config) {
			viewArr.push(
				<View key={item.text} style={styles.item}>
					<Text>{item.num}</Text>
					<Text>{item.text}</Text>
				</View>
			);
		}
		return viewArr;
	}
}

const styles = StyleSheet.create({
    container: {
        height:124,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,96,0,1)'
    },
	viewWraper:{
		flexDirection:'row',
		flex:1,
		justifyContent: 'space-between',
	},
	topImage:{
		width:25,
		height:25
	},
	topInfoWraper:{
		flexDirection:'row',
		justifyContent: 'space-between',
		height:80,
		marginLeft:10,
		marginRight:10,
		alignItems:'center',
		marginTop:20
	},
	topInfo:{
		flexDirection:'row',
		flex:1,
		alignItems:'center'
	},
	nameImage:{
		borderRadius:20,
		width:40,
		height:40
	},
	item:{
		backgroundColor:'rgba(255,255,255,0.4)',
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	}
});
