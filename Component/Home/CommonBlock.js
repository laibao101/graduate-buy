import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View,Image} from 'react-native';



export default class ComonBlock extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image
                        source={{uri:this.props.leftIcon}}
                    ></Image>
                    <Text style={styles.leftTitle}>{this.props.leftTitle}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.rightTitle}>{this.props.rightTitle}</Text>
                    <Image
                        source={require('../../andres/icon_cell_rightarrow.png')}
                    ></Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        height:40
    },
    leftTitle:{
        fontSize:16
    },
    rightTitle:{
        color:'#ccc',
        fontSize:14,
        paddingRight:5
    }
});
