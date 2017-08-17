import React, { Component } from 'react';
import { AppRegistry, StyleSheet} from 'react-native';

import { Container, Content, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';

import HeaderComponent from './Header.js'

export default class SingleQuestionComponent extends Component {
    //consider destructuring {question: { title, tests, boilerPlate, description}}
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.question.title,
            tests: this.props.question.tests,
            boilerPlate: this.props.question.boilerPlate,
            description: this.props.question.description
        };
        //consider Arrow functions
        this.onBackPress = this.onBackPress.bind(this);
        this.onCodePress = this.onCodePress.bind(this);
    }

    // go back to all questions list
    onBackPress() {
        this.props.navigator.push({
            id: 'all-questions-component'
        });
    }

    // navigate to the code environment to begin question
    onCodePress() {
        this.props.navigator.push({
            id: 'Code-Env',
            question: this.state
        });
    }

    render() {
        return (
          <Container>
            <HeaderComponent navigator={this.props.navigator} />
            <Content styles={styles.container}>
              <View>
                <Text>{this.state.title}</Text>
                {
                  this.state.tests.map(test => {
                      return (
                          <View key={test.inputs}>
                              <Text>Inputs: {test.inputs}</Text>
                              <Text>Output: {test.output} </Text>
                          </View>
                      )
                  })
                }
                <Text>{this.state.description}</Text>
                <Container style={styles.container}>
                  <Button onPress={this.onCodePress} bordered>
                    <Text>Code!</Text>
                  </Button>
                </Container>
              </View>
            </Content>

          </Container>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
