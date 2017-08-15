import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button, ListView, TouchableHighlight } from 'react-native';

export default class AllQuestions extends Component {
    constructor(props){
        super(props);

        this.onBackPress = this.onBackPress.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.onQuestionPress = this.onQuestionPress.bind(this);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const questions = [
            {id: 'single-question-component', title: 'Question1', tests: 'test', boilerPlate: 'function(word){\n}', description: 'Enter question Description'},
            {id: 'single-question-component', title: 'Question2', tests: 'test2', boilerPlate: 'function(word2){\n}', description: 'Enter question Description'},
            {id: 'single-question-component', title: 'Question3', tests: 'test3', boilerPlate: 'function(word3){\n}', description: 'Enter question Description'}
        ]

        this.state = {
            dataSource: ds.cloneWithRows(questions)
        }
    }

    onBackPress() {
        this.props.navigator.push({id: 'homecomponent'})
    }

    onQuestionPress(question){
        this.props.navigator.push({
            id: 'single-question-component',
            question: question
        })
    }

    renderRow(question) {
        return (
            <TouchableHighlight
            onPress={() => {this.onQuestionPress(question)}}>
            <View style={styles.row}>
                <Text style={styles.rowText}>{question.title}</Text>
            </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}/>
                <Button
                    onPress={() => this.onBackPress()}
                    title="Go back to base"
                />
            </View>
        )
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