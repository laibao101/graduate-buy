import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import MiddleCommonView from './MiddleCommonView';

import topMiddleData from '../../LocalData/HomeTopMiddleLeft.json';

export default class HomeMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
				{/* 左边 */}
				{this.renderLeftView()}
				{/* 右边 */}
				<View style={styles.half}>
					{this.renderRightView()}
				</View>
            </View>
        );
    }

	renderLeftView(){
		const leftData = topMiddleData.dataLeft[0];

		return (
			<View style={[styles.half,styles.leftViewStyle]}>
				<Image
					source={{uri:leftData.img1}}
					style={styles.mainImage}
				></Image>
				<Image
					source={{uri:leftData.img2}}
					style={styles.subImage}
				></Image>
				<Text>{leftData.title}</Text>
				<View style={styles.container}>
					<Text style={styles.price}>{leftData.price}</Text>
					<Text style={styles.sale}>{leftData.sale}</Text>
				</View>
			</View>
		);
	}

	renderRightView(){
		const viewArr = [];
		const rightData = topMiddleData.dataRight;

		rightData.map( (item,index) => {
			viewArr.push(
				<MiddleCommonView
                    key={index}
                    title={item.title}
                    rightImage={item.rightImage}
                    subTitle={item.subTitle}
                    titleColor={item.titleColor}
                ></MiddleCommonView>
			);
		});

		return viewArr;
	}
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
    },
	mainImage:{
		width:width/3,
		height:30
	},
	subImage:{
		height:30,
		width:50
	},
	half:{
		flex:1
	},
	leftViewStyle:{
		borderRightColor:'#ddd',
		borderRightWidth:0.5,
		borderBottomColor:'#ddd',
		borderBottomWidth:0.5,
		height:100,
		alignItems:'center'
	},
	price:{
		color:'#06c1ae'
	},
	sale:{
		backgroundColor:'yellow',
		fontSize:13,
		fontWeight:'normal'
	}
});
