import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';

import TopListView from './TopListView';
import topMenu from '../../LocalData/TopMenu.json';

const width = Dimensions.get('window').width;

export default class HomeTopView extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentPage:0
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 内容部分 */}
                <ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					pagingEnabled={true}
                    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
				>
                    {this.renderScrollItem()}
                </ScrollView>
                {/* 页码指示 */}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator.call(this)}
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


    onMomentumScrollEnd(e){
        const currentPage = Math.floor( e.nativeEvent.contentOffset.x / width );

        this.setState({
            currentPage:currentPage
        });

    }

    renderIndicator() {
        //页码
        const indicatorArr = [];
        const len = topMenu.data.length;

        for (var i = 0; i < len; i++) {
            const currentColor = this.state.currentPage == i ? {backgroundColor:'rgba(255,96,0,1)'} : {backgroundColor:'gray'};
            indicatorArr.push(
                <View
                    key={i}
                    style={[styles.indicatorStyle,currentColor]}
                ></View>
            );
        }

        return indicatorArr;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF'
    },
    indicatorViewStyle:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:20
    },
    indicatorStyle:{
        width:10,
        height:10,
        borderRadius:5,
        marginRight:5
    }
});
