import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator} from 'react-native';



import AndroidLanch from './Component/Main/AndroidLanch';

export default class HGBuy extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: '安卓启动页',component: AndroidLanch,index:0}}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route, navigator) =>{
                    const Component = route.component;
                        return <Component navigator={navigator} />
                }}
            />
        );
    }

}

AppRegistry.registerComponent('HGBuy', () => HGBuy);
