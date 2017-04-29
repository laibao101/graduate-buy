import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View,WebView} from 'react-native';

export default class CommonWebView extends Component {
	constructor(props){
		super(props);
		console.log(props);
	}
    render() {
        return (
            <WebView
				source={{uri:this.props.url}}
				// source={{uri:'http://www.baidu.com'}}
			></WebView>
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
