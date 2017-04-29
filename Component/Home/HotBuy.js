import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View,Image,Dimensions} from 'react-native';

import CommonBlock from './CommonBlock';

import hotBuyData from '../../LocalData/XMG_Home_D6.json';

export default class HotBuy extends Component {
    render() {
		const data = hotBuyData.data[0].resource.cateArea;

        return (
            <View style={styles.container}>
				<CommonBlock
					leftIcon="hot"
					leftTitle="热门频道"
					rightTitle="查看全部"
    ></CommonBlock>
				<View style={styles.hotBuyItem}>
                    {data.map((item,index) => {
    					if (index<=1) {
    						return <HotBuyItemTop key={index} {...item}></HotBuyItemTop>
    					} else if(index <=5) {
    						return <HotBuyItemBottom key={index} {...item}></HotBuyItemBottom>
    					}
    				})}
				</View>

            </View>
        );
    }
}


class HotBuyItemTop extends Component {
	render(){
		return (
			<View style={styles.itemTop}>
				<View style={styles.topLeft}>
					<Text style={styles.mainTitle}>{this.props.mainTitle}</Text>
					<Text style={styles.deputyTitle}>{this.props.deputyTitle}</Text>
					<Image
						source={{uri:this.props.entranceImgUrl}}
						style={styles.topLeftImage}
     ></Image>
				</View>
				<View style={styles.topRight}>
					<Image
						source={{uri:this.props.entranceImgUrl}}
						style={styles.topRightImage}
     ></Image>
				</View>
			</View>
		);
	}

}

class HotBuyItemBottom extends Component {
	render(){
		return (
			<View style={styles.itemBottom}>
				<Text style={styles.mainTitle}>{this.props.mainTitle}</Text>
				<Text style={styles.deputyTitle}>{this.props.deputyTitle}</Text>
				<Image
                    source={{uri:this.props.entranceImgUrl}}
                    style={styles.itemBottomImage}
    ></Image>
			</View>
		);
	}

}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
		marginTop:20,
		backgroundColor:'white'
    },
	topLeftImage:{
		width:20,
		height:20
	},
	topRightImage:{
		height:50,
		width:50
	},
	itemTop:{
		flexDirection:'row',
		width:(width-20)/2,
		backgroundColor:'#ccc',
		alignItems:'center',
		justifyContent:'space-around',
        marginBottom:10
	},
	hotBuyItem:{
		flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
	},
    mainTitle:{
        fontSize:15
    },
    deputyTitle:{
        fontSize:14,
        color:"#666"
    },
    topLeft:{
        justifyContent:'space-between',
        alignItems:'center',
        padding:5
    },
    itemBottomImage:{
        width:50,
        height:50
    },
    itemBottom:{
        alignItems:'center',
        backgroundColor:'#ccc',
        width:(width-20)/4,
    }
});
