import React, { Component } from 'react';
import { ListView, AppRegistry, Keyboard, StyleSheet, Button, Text, TouchableOpacity, Clipboard } from 'react-native';

export default class OperatorButton extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            OperatorKeys: ds.cloneWithRows([
                {title: '+', output: ' + '}, 
                {title: '-', output: ' - '}, 
                {title: '=', output: ' = '},
                {title: '==', output: ' == '},
                {title: '===', output: ' === '},
                {title: '>', output: ' > '},
                {title: '<', output: ' < '},
                {title: '%', output: ' % '},
                {title: '&&', output: ' && '},
                {title: '||', output: ' || '},
                {title: '?', output: ' ? '},
                {title: ':', output: ' : '},
            ]),

        };
    }

    render() {
        return (
                <ListView
                  dataSource={this.state.OperatorKeys}
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