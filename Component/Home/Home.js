import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import HomeDetail from './HomeDetail';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.showDetail.bind(this)}>
                    <Text style={styles.welcome}>
                        首页
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    showDetail(){
        console.log(this.props);
        this.props.navigator.push({
            title:'首页详情',
            component:HomeDetail
        });
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
