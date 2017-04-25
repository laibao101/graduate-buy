import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView} from 'react-native';

// 自定义组件
import HomeDetail from './HomeDetail';
import HomeTopView from './HomeTopView';

// icon
import icons from '../../Assets/ios_icon';


export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* 导航 */}
                {this.renderNavBar()}
				{/* 首页分类 */}
				<HomeTopView></HomeTopView>
            </View>
        );
    }

    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                {/* 左边 */}
                <TouchableOpacity
                    onPress={() => console.log('city pressed')}
                >
                    <Text style={{color:'white'}}>武汉</Text>
                </TouchableOpacity>
                {/* 中间 */}
                <TextInput
                    placeholder="输入商家、品类、商圈"
                    style={styles.topInputStyle}
                >
                </TextInput>
                {/* 右边 */}
                <View style={styles.navRightImageWarper}>
                    <Image source={{uri:icons.bell}} style={styles.navRightImage}></Image>
                    <Image source={{uri:icons.QRCode}} style={styles.navRightImage}></Image>
                </View>
            </View>
        );
    }
}

console.log(Platform);

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    topInputStyle:{
        width:width*0.75,
        height:40,
        backgroundColor:'white',
        borderRadius:15,
        paddingLeft:10
    },
    navBarStyle:{
        height:64,
        backgroundColor:'rgba(255,96,0,1)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
		paddingTop:Platform.OS === 'ios' ? 20 : 0
    },
    navRightImageWarper:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    navRightImage:{
        width:20,
        height:20
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});
