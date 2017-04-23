import React, {Component} from 'react';
import {AppRegistry, StyleSheet} from 'react-native';

import Main from './Component/Main/Main';


export default class HGBuy extends Component {
    render() {
        return (
            <Main></Main>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('HGBuy', () => HGBuy);
