import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';

import HeaderComponent from './Header.js'

const cards = [
  { id: 'single-question-component', title: 'String Search', tests: [{inputs:['or', 'hello world'], output:[true]},{inputs:['he', 'hello'], output: [true]},
  {inputs:['wet', 'youse sir'], output: [false]}], boilerPlate: 'function indexOf (needle, haystack){\n\t\n}', description:  'You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).', image: require('./img/fullstack.png'), likes: 0 },
  { id: 'single-question-component', title: 'Reverse Array', tests: [{inputs:[[1,2,3,4]], output:[[4,3,2,1]]}], boilerPlate: 'function reverseArray(arr){\n\t\n}', description: 'Write a function reverseArray that reverses the elements of an array and returns the reversed array.',image: require('./img/fullstack.png'), likes: 0 },
  { id: 'single-question-component', title: 'Question3', tests: [{inputs:[1], output:[false]}], boilerPlate: 'function(word3){\n\t\n}', description: 'Enter question Description', image: require('./img/fs-logo.png'), likes: 0 }
];
export default class AllQuestions extends Component {
  constructor(props) {
    super(props);

    this.onQuestionPress = this.onQuestionPress.bind(this);
  }

  onQuestionPress(question) {
      this.props.navigator.push({
          id: 'single-question-component',
          question: question
      })
  }

  render() {
    return (
      <Container style={styles.container}>
        <HeaderComponent navigator={this.props.navigator} style={styles.item} />

        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <TouchableOpacity onPress={() => { this.onQuestionPress(item) }} >
              <Card style={{ elevation: 3 }}>
                <CardItem >
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note>Medium</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Text>{item.description}</Text>
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text style={{color: '#999999'}}>{item.likes}</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
            }
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cccccc'
    },
    item: {

    }
});