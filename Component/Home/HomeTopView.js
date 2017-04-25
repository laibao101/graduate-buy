import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';

import TopListView from './TopListView';
import topMenu from '../../LocalData/TopMenu.json';


export default class HomeTopView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* 内容部分 */}
                <ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					pagingEnabled={true}
				>
                    {this.renderScrollItem()}
                </ScrollView>
                {/* 页码指示 */}
                <View>
                    {/* {this.renderIndicator()} */}
                </View>
            </View>
        );
    }

    renderScrollItem() {
        //组件数组
        const itemArr = [];

		const dataArr = topMenu.data;


        dataArr.map( (item,index) => {
            itemArr.push(
				<TopListView
					key={index}
					dataArr = {item}
                ></TopListView>
			);
        })


		return itemArr;
    }

    renderIndicator() {
        //页码
        const indicatorArr = [];

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
