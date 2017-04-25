import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

import CommonCell from './CommonCell';

import icons from '../../Assets/ios_icon';

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* 导航条 */}
                {this.renderNavBar()}
                <ScrollView>
                    <View style={styles.listView}>
                        <CommonCell title="扫一扫" isSwitch={false} rightTitle="18.54"></CommonCell>

                    </View>
                    <View style={styles.listView}>
                        {this.renderCell([
                            {
                                title: "省流量模式",
                                isSwitch: true
                            }, {
                                title: "消息提醒"
                            }, {
                                title: "邀请好友"
                            }, {
                                title: "清空缓存",
                                rightTitle: "1.4M"
                            }
                        ])}
                    </View>
                    <View style={styles.listView}>
                        {this.renderCell([
                            {
                                title: "意见反馈"
                            }, {
                                title: "问卷调查"
                            }, {
                                title: "支付帮助"
                            }, {
                                title: "网络诊断"
                            }, {
                                title: "关于华哥"
                            }
                        ])}
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                <Text style={{
                    fontSize: 16,
                    color: 'white'
                }}>更多</Text>
                <TouchableOpacity onPress={() => console.log('more pressed')} style={styles.rightViewStyle}>
                    <Image source={{
                        uri: icons.setting
                    }} style={styles.navRightImage}></Image>
                </TouchableOpacity>
            </View>
        );
    }

    renderCell(config) {
        const cellArr = []
        for (item of config) {
            cellArr.push(
                <CommonCell title={item.title} isSwitch={item.isSwitch} rightTitle={item.rightTitle} key={item.title}></CommonCell>
            )
        }
        return cellArr;
    }
}

const styles = StyleSheet.create({
    navRightImage: {
        width: 40,
        height: 40
    },
    rightViewStyle: {
        position: 'absolute',
        right: 10,
        bottom: Platform.OS === 'ios'
            ? 0
            : 10
    },
    navBarStyle: {
        height: 64,
        backgroundColor: 'rgba(255,96,0,1)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios'
            ? 20
            : 0,
        justifyContent: 'center'
    },
    listView: {
        marginTop: 20
    },
    container: {
        backgroundColor: '#ccc'
    }
});
