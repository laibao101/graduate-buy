import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';

import MineCell from './MineCell';
import MineHeader from './MineHeader';
import Order from './Order';

export default class Mine extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* 头部 */}
                <MineHeader></MineHeader>
                {/* 列表部分 */}
                <ScrollView >
                    <Order></Order>
                    {this.renderView()}
                </ScrollView>
            </View>
        );
    }

    renderView(){
        const listView = {
            1:[
                {
                    leftIcon:require('../../andres/draft.png'),
                    leftTitle:"我的钱包",
                    rightTitle:"账户余额￥100"
                },{
                    leftIcon:require('../../andres/icon_message.png'),
                    leftTitle:"抵用券",
                    rightTitle:"0"
                }
            ],
            2:[
                {
                    leftIcon:require('../../andres/card.png'),
                    leftTitle:"积分商城"
                }
            ],
            3:[
                {
                    leftIcon:require('../../andres/new_friend.png'),
                    leftTitle:"今日推荐",
                    isRightImage:true,
                    rightIcon:require('../../andres/me_new.png')
                }
            ],
            4:[
                {
                    leftIcon:require('../../andres/pay.png'),
                    leftTitle:"我要合作",
                    rightTitle:"轻松开店，招财进宝"
                }
            ]
        };

        const viewArr = [];

        for (const list in listView) {
            viewArr[list] = [];
            viewArr[list].push(
                <View style={styles.listView}>
                    {listView[list].map(item => <MineCell style={styles.cellView} key={item.leftTitle} leftIcon={item.leftIcon} leftTitle={item.leftTitle}  isRightImage={item.isRightImage} rightIcon={item.rightIcon} rightTitle={item.rightTitle} ></MineCell>)}
                </View>
            );
        }

        return viewArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    listView: {
        marginTop: 20,
        borderTopColor: '#ddd',
        borderTopWidth: 0.5,
        backgroundColor: 'white',
    },
    cellView:{
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.5,
    }
});
