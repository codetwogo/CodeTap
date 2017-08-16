import React, { Component } from 'react';
import { ListView, AppRegistry, Keyboard, StyleSheet, Button, Text, TouchableOpacity, Clipboard } from 'react-native';

export default class StringButton extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            StringKeys: ds.cloneWithRows([
                {title: 'slice', output: '.slice( )'}, 
                {title: 'split', output: '.split()'}, 
                {title: 'startsWith', output: '.startsWith()'},
                {title: 'length', output: '.length'},
                {title: 'toLowerCase', output: '.toLowerCase()'},
                {title: 'toUpperCase', output: '.toUpperCase()'}
            ]),

        };
    }

    render() {
        return (
                <ListView
                  dataSource={this.state.StringKeys}
                  renderRow={(rowData)=>
                    <TouchableOpacity onPress={()=> {this.props.edit(rowData.output);
                    return this.props.toggle();}}>
                    <Text style={styles.hotKey}>
                    {rowData.title}
                    </Text>
                  </TouchableOpacity>}
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    hotKey:{
      flex: 1,
      color: 'green'
    }
});