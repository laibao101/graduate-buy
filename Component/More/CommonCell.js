import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class CommonCell extends Component {
    constructor(props) {
		super(props);

		this.state = {
			title: props.title
		}
	}

    render() {
        return (
			<TouchableOpacity>
				<View style={styles.container}>
	                {/* 左边 */}
	                <Text>{this.state.title}</Text>
	                {/* 右边 */}
					<Image source={require('../../andres/icon_cell_rightarrow.png')}
						style={{
								width: 8,
								height: 13
						}}></Image>
	            </View>
			</TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        backgroundColor: 'white',
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
		alignItems:'center'
    }
});
