import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button, ListView, TouchableHighlight } from 'react-native';

export default class AllQuestions extends Component {
    constructor(props){
        super(props);

        this.onPress = this.onPress.bind(this);
        this.renderRow = this.renderRow.bind(this);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const questions = [
            {id: 'single-question-component', title: 'Question1', tests: 'test', boilerPlate: 'function(word){\n}'},
            {id: 'single-question-component', title: 'Question2', tests: 'test2', boilerPlate: 'function(word2){\n}'},
            {id: 'single-question-component', title: 'Question3', tests: 'test3', boilerPlate: 'function(word3){\n}'}
        ];

        this.state = {
            dataSource: ds.cloneWithRows(questions)
        };
    }

    onPress(object) {
        this.props.navigator.push(object);
    }

    renderRow(question) {
        return (
            <TouchableHighlight
            onPress={() => {this.onPress(question);}}>
            <View style={styles.row}>
                <Text style={styles.rowText}>{question.title}</Text>
            </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}/>
                <Button
                    onPress={() => this.onPress({id: 'homecomponent'})}
                    title="Go back to base"
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('AllQuestions', () => AllQuestions);

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
});
