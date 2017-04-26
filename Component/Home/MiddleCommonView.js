import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

export default class MiddleCommonView extends Component {
	constructor(props){
		super(props);
		const data = props.data;

		this.state = {
			title:data.title || '',
			rightImage:data.rightImage,
			subTitle:data.subTitle,
			titleColor:data.titleColor
		}
	}

    render() {
        return (
            <View style={styles.container}>
				<View>
					<Text style={[{color:this.state.titleColor},styles.title]}>{this.state.title}</Text>
					<Text style={styles.subTitle}>{this.state.subTitle}</Text>
				</View>
				<View>
					<Image
						source={{uri:this.state.rightImage}}
						style={styles.rightImage}
					></Image>
				</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		borderBottomColor:'#ddd',
		borderBottomWidth:0.5,
		height:50,
		alignItems:'center',
		justifyContent:'center'
	},
	rightImage:{
		width:40,
		height:40
	},
	title:{
		fontSize:17,
	},
	subTitle:{
		fontSize:15
	}
});
