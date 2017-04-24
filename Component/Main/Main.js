import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Platform, Navigator} from 'react-native';

//图标资源
import icons from '../../Assets/ios_icon';
//安装组件
import TabNavigator from 'react-native-tab-navigator';
//自定义组件
import Home from '../Home/Home';
import Mine from '../Mine/Mine';
import Shop from '../Shop/Shop';
import More from '../More/More';


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
                {this.renderTabBar()}
			</TabNavigator>
        );
    }

    renderTabBar(){
        const configArr = [
            {
                title:'首页',
                selectedTab:'home',
                icon:icons.home,
                selectedIcon:icons.home_selected,
                component:Home
            },
            {
                title:'商家',
                selectedTab:'shop',
                icon:icons.shop,
                selectedIcon:icons.shop_selected,
                component:Shop
            },
            {
                title:'我的',
                selectedTab:'mine',
                icon:icons.mine,
                selectedIcon:icons.mine_selected,
                component:Mine
            },
            {
                title:'更多',
                selectedTab:'more',
                icon:icons.more,
                selectedIcon:icons.more_selected,
                component:More
            }
        ];
        const TabBar = [];

        for (const item of configArr) {
            TabBar.push(
                this.renderTabBarItem(item)
            )
        }

        return TabBar;
    }


    renderTabBarItem(config){
        const title = config.title;
        const selectedTab = config.selectedTab;
        const icon = config.icon;
        const selectedIcon = config.selectedIcon;
        const component = config.component;
        return (
            <TabNavigator.Item
                key={title}
                selected={this.state.selectedTab === selectedTab}
                title={title}
                renderIcon={() => <Image source={{uri:icon}} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectedIcon}} style={styles.iconStyle} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                <Navigator
                    initialRoute={{name: title,component: component,index:0}}
                    renderScene={(route, navigator) =>{
                        const Component = route.component;
                        return <Component navigator={navigator} />
                    }}
                />
            </TabNavigator.Item>
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
