import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';



import Main from './Component/Main/Main';

export default class HGBuy extends Component {
    render() {
        return (
            <Main></Main>
        );
    }

}

AppRegistry.registerComponent('HGBuy', () => HGBuy);
