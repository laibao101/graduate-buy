import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class MineCell extends Component {
	constructor(props){
		super(props);

		this.state = {
			leftIcon:props.leftIcon,
			leftTitle:props.leftTitle,
			rightIcon:props.rightIcon,
			rightTitle:props.rightTitle,
			isRightImage:props.isRightImage || false
		};
	}

    render() {
        return (
			<TouchableOpacity style={styles.container}>
				<View style={styles.cellView}>
	                {/* 左边 */}
					<View style={styles.leftViewStyle}>
						<Image
							source={this.state.leftIcon}
							style={styles.leftImageStyle}
						></Image>
						<Text style={styles.cellText}>{this.state.leftTitle}</Text>
					</View>
					{/* 右边 */}
					{this.renderRightView()}
	            </View>
			</TouchableOpacity>
        );
    }


	renderRightView(){
		if (this.state.isRightImage) {
			return (
				<View style={styles.rightViewStyle}>
					<Image
						source={this.state.rightIcon}
						style={styles.rightImageStyle}
					></Image>
					<Image
						source={require('../../andres/icon_cell_rightarrow.png')}
						style={styles.rightImageStyle}
					></Image>
				</View>
			);
		}

		return (
			<View style={styles.rightViewStyle}>
				<Text>{this.state.rightTitle}</Text>
				<Image
					source={require('../../andres/icon_cell_rightarrow.png')}
					style={styles.rightImageStyle}
				></Image>
			</View>
		);

	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		height:44,
		justifyContent: 'center',
		borderBottomColor: '#ddd',
        borderBottomWidth: 0.5
    },
	cellView:{
		justifyContent: 'space-between',
		flexDirection:'row',
		alignItems: 'center',
		paddingLeft:10,
		paddingRight:10
	},
	leftViewStyle:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent: 'space-between'
	},
	rightViewStyle:{
		flexDirection:'row',
		alignItems: 'center'
	},
	leftImageStyle:{
		width:25,
		height:25,
		borderRadius:10
	},
	cellText:{
		fontSize:16,
		color:'gray'
	},
	rightImageStyle:{

	}
});
