import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TabBarIOS} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import icons from '../../Assets/ios_icon';

console.log(icons);

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
			<TabNavigator>
				{/* 首页 */}
				<TabNavigator.Item
					selected={this.state.selectedTab === 'home'}
					title="首页"
					renderIcon={() => <Image source={{uri:icons.home}} style={styles.iconStyle} />}
					renderSelectedIcon={() => <Image source={{uri:icons.home_selected}} style={styles.iconStyle} />}
					onPress={() => this.setState({ selectedTab: 'home' })}>
					<Text>首页</Text>
				</TabNavigator.Item>
				{/* 商家 */}
				<TabNavigator.Item
					selected={this.state.selectedTab === 'shop'}
					title="商家"
					onPress={() => this.setState({ selectedTab: 'shop' })}>
					<Text>fsd</Text>
				</TabNavigator.Item>
				{/* 我的 */}
				<TabNavigator.Item
					selected={this.state.selectedTab === 'mine'}
					title="我的"
					onPress={() => this.setState({ selectedTab: 'mine' })}>
					<Text>fsd</Text>
				</TabNavigator.Item>
				{/* 更多 */}
				<TabNavigator.Item
					selected={this.state.selectedTab === 'more'}
					title="更多"
					onPress={() => this.setState({ selectedTab: 'more' })}>
					<Text>fsd</Text>
				</TabNavigator.Item>
			</TabNavigator>

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
    iconStyle: {
		width:20,
		height:20
	}
});
