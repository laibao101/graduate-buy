import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView,TouchableOpacity,Image,Dimensions} from 'react-native';

import CommonBlock from './CommonBlock';
import CommonWebView from './CommonWebView';

import shopCenterData from '../../LocalData/XMG_Home_D5.json';

export default class ShopCenter extends Component {
    render() {
        const data = shopCenterData.data;
        return (
            <View style={styles.container}>
                <CommonBlock
                    leftIcon="gw"
                    leftTitle="购物中心"
                    rightTitle={shopCenterData.tips}
                ></CommonBlock>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {data.map((item,index) => <ShopCenterItem navigator={this.props.navigator} {...item} key={index}></ShopCenterItem>)}
                </ScrollView>
            </View>
        );
    }

}


class ShopCenterItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity
                onPress={() => this.showShopList.call(this,this.props.detailurl)}
            >
                <View style={styles.shopItem}>
                    <Image
                        source={{uri:'https://imgsa.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=ca5abb5b7bf0f736ccf344536b3cd87c/29381f30e924b899c83ff41c6d061d950a7bf697.jpg'}}
                        style={styles.shopItemImage}
                    ></Image>
                    <Text style={styles.showText}>{this.props.showtext.text}</Text>
                    <Text>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    showShopList(url){
        const matched = url.match(/url=(.+)/);
        const viewUrl = matched[0].replace(/url=(.+)/,"$1");

        console.log(url);

        this.props.navigator.push({
            component:CommonWebView,
            passProps:{
                title:this.props.detailurl
            }
        });
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'white'
    },
    shopItemImage:{
        width:100,
        height:80,
        borderRadius:5,
    },
    shopItem:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20
    },
    showText:{
        position:'absolute',
        backgroundColor:'orange',
        color:'white',
        left:0,
        bottom:20
    }
});
