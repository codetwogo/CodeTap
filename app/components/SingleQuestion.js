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
            likes: this.props.question.likes,
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
            <Content style={styles.container}>
              <View style={styles.topRowContainer}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                  <Icon name="heart" style={{ fontSize: 24, color: '#ED4A6A' }} />
                  <Text style={{flex: 1, color: '#888888'}}>{` ${this.props.question.likes}`}</Text>
                  <Text style={{flex: 2, fontSize: 22, fontWeight: 'bold', color: '#aa0000', alignSelf: 'center'}}>{this.state.title}</Text>
                  <Text style={{flex: 1, color: '#880000', alignSelf: 'center'}}>{` `}</Text>
                </View>
              </View>
              <View style={{flex: 1, minHeight: 10, borderRadius: 10, padding: 10, paddingTop: 10, paddingBottom: 20, backgroundColor: '#777777', marginTop: 20, marginBottom: 16}}>
                {
                  this.state.tests.map(test => {
                    return (
                      <View key={test.inputs}>
                        <Text style={{lineHeight: 44}}>Inputs: {test.inputs}</Text>
                        <Text>Output: {test.output} </Text>
                      </View>
                    )
                  })
                }
              </View>
              <Text style={{padding: 5, fontSize: 16, marginBottom: 15, color: '#888888'}}>{this.state.description}</Text>
              <Button
                light
                onPress={this.onCodePress}
                bordered
                style={{borderColor: '#999999',alignSelf: 'center'}}>
                <Text style={{color: '#999999'}}>Code!</Text>
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

  }
});
