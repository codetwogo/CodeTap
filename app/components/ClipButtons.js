import React, { Component } from 'react';
import { ListView, AppRegistry, Keyboard, StyleSheet, Button, Text, TouchableOpacity, Clipboard } from 'react-native';

export default class ClipButton extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            hotKeys: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5'])
        };
    }

    render() {
        return (
                <ListView
                  dataSource={this.state.hotKeys}
                  renderRow={(rowData)=>
                    <TouchableOpacity onPress={()=> Clipboard.setString(rowData)}>
                    <Text style={styles.hotKey}>
                    {rowData}
                    </Text>
                  </TouchableOpacity>}
                />
        );
    }
}

AppRegistry.registerComponent('ClipButton', () => ClipButton);

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
