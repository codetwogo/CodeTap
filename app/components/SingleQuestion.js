import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, View, Text, Icon, Button } from 'native-base';

import HeaderComponent from './Header.js'

export default class SingleQuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.question.title,
      tests: this.props.question.tests,
      likes: this.props.question.likes,
      boilerPlate: this.props.question.boilerPlate,
      description: this.props.question.description
    };
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
        <Content style={styles.container}>
          <View>
            <View style={styles.topRowContainer}>
              <Icon
                name="heart"
                style={styles.heart} />
              <Text style={styles.likes}>{` ${this.props.question.likes}`}</Text>
              <Text style={styles.title}>{this.state.title}</Text>
            </View>
          </View>
          <View style={styles.middleContainer}>
            {
              this.state.tests.map(test => {
                return (
                  <View key={test.inputs}>
                    <Text style={styles.inputs}>Inputs:    {test.inputs.join(', ')}</Text>
                    <Text style={styles.outputs}>Output:   {test.output.join(' ')}</Text>
                  </View>
                )
              })
            }
          </View>
          <Text style={styles.description}>{this.state.description}</Text>
          <Button
            light
            onPress={this.onCodePress}
            bordered
            style={styles.codeButton}>
            <Text style={styles.codeButtonText}>Code!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 12,
    backgroundColor: '#333333'
  },
  topRowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  heart: {
    fontSize: 24,
    color: '#888888'
  },
  likes: {
    flex: 1,
    color: '#888888'
  },
  title: {
    flex: 2,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#aa0000',
    alignSelf: 'center'
  },
  middleContainer: {
    flex: 1,
    minHeight: 10,
    borderRadius: 10,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#777777',
    marginTop: 20,
    marginBottom: 16
  },
  inputs: {
    lineHeight: 40,
    color: '#442222'
  },
  outputs: {
    color: '#333300',
    fontStyle: 'italic'
  },
  description: {
    padding: 5,
    fontSize: 16,
    marginBottom: 15,
    color: '#888888'
  },
  codeButton: {
    borderColor: '#999999',
    alignSelf: 'center'
  },
  codeButtonText: {
    color: '#999999'
  }
});
