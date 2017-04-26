import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';

import MiddleCommonView from './MiddleCommonView';

import homeTopMiddleData from '../../LocalData/HomeTopMiddle.json';
import homeD4Data from '../../LocalData/XMG_Home_D4.json';


const width = Dimensions.get('window').width;

export default class HomeMiddleAd extends Component {
    render() {
        const hTData = homeTopMiddleData.data[0];
        return (
            <View style={styles.top20}>
                <MiddleCommonView
                    title={hTData.title}
                    subTitle={hTData.subTitle}
                    rightImage={hTData.image}
                    titleColor={hTData.titleColor}
                ></MiddleCommonView>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {this.renderList()}
                </View>
            </View>
        );
    }

    renderList(){
        const viewArr = [];

        homeD4Data.data.map((item,index) => {
            viewArr.push(
                <View
                    style={styles.container}
                    key={index}
                >
                    <MiddleCommonView
                        title={item.maintitle}
                        subTitle={item.title}
                        rightImage={item.imageurl}
                        titleColor={item.typeface_color}
                    ></MiddleCommonView>
                </View>

            );
        } );
        return viewArr;
    }
}

const styles = StyleSheet.create({
    container: {
        borderRightColor:'#ddd',
		borderRightWidth:0.5,
		borderBottomColor:'#ddd',
		borderBottomWidth:0.5,
		width:width/2,
		alignItems:'center'
    },
    top20:{
        marginTop:20,
        borderTopColor:'#ddd',
		borderTopWidth:0.5,
        backgroundColor:'white'
    }
});
