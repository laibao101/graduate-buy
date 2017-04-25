import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    ListView,
	Dimensions,
	TouchableOpacity
} from 'react-native';

export default class TopListView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.dataArr)
        };
    }

    render() {
        return (
            <ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				contentContainerStyle={styles.listViewStyle}
			></ListView>
        );
    }

	renderRow(rowData){
		return (
			<TouchableOpacity>
				<View
					key={rowData.title}
					style={styles.cellStyle}
				>
					<Image
						// source={require('../../andres/ms.png')}
						source={{uri:rowData.image}}
						style={styles.itemImage}
					></Image>
					<Text>{rowData.title}</Text>
				</View>
			</TouchableOpacity>
		);
	}

}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
	itemImage:{
		width:52,
		height:52
	},
	listViewStyle:{
		flexDirection:'row',
		flexWrap:'wrap',
		width:width
	},
	cellStyle:{
		alignItems:'center',
		width:width/5
	}
});
