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
            <View>
                {/* 导航条 */}
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop:20}}>
                        <CommonCell title="扫一扫"></CommonCell>
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
    }
});
