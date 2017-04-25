import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch
} from 'react-native';

export default class CommonCell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            isSwitch: props.isSwitch || false,
            isOn:props.isOn || false,
            rightTitle:props.rightTitle || ""
        }
    }

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    {/* 左边 */}
                    <Text>{this.state.title}</Text>
                    {/* 右边 */}
                    {this.renderRightView.call(this)}
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView() {
        if (this.props.isSwitch) {
            return (
                <Switch
                    value={this.state.isOn}
                    onValueChange={(newVal) => {
                        this.setState({
                            isOn:newVal
                        })
                    }}
                ></Switch>
            );
        }
        return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{paddingRight:10}}>{this.state.rightTitle}</Text>
                <Image source={require('../../andres/icon_cell_rightarrow.png')} style={{
                    width: 8,
                    height: 13
                }}></Image>
            </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10
    }
});
