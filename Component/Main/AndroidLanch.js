import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    Navigator
} from 'react-native';

import Main from './Main';

export default class AndroidLanch extends Component {
    render() {
        return (
            <Image source={require('../../andres/launchimage.png')} style={styles.container}></Image>
        );
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
			this.props.navigator.push({
				component:Main
			})
		}, 500)
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height
    }
});
