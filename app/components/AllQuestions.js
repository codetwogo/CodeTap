import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, AsyncStorage, NetInfo } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';

import HeaderComponent from './Header.js'

const cards = [
  {
    id: 'single-question-component',
    title: 'String Search (SAMPLE)',
    tests: [
      {
        inputs: ['or', 'hello world'],
        output: [true]
      }, {
        inputs: ['he', 'hello'],
        output: [true]
      }, {
        inputs: ['wet', 'youse sir'],
        output: [false]
      }
    ],
    boilerPlate: 'function indexOf (needle, haystack){\n\t\n}',
    description: 'You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).',
    image: require('./img/fullstack.png'),
    likes: 0
  }, {
    id: 'single-question-component',
    title: 'Reverse Array (SAMPLE)',
    tests: [
      {
        inputs: [[1, 2, 3, 4]],
        output: [[4, 3, 2, 1]]
      }
    ],
    boilerPlate: 'function reverseArray(arr){\n\t\n}',
    description: 'Write a function reverseArray that reverses the elements of an array and returns the reversed array.',
    image: require('./img/fullstack.png'),
    likes: 0
  },
];

export default class AllQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
      initializeCards: false,
      myQuestions: cards,
      onlineQuestions: [{}], // fetched from server
    }
    this.onQuestionPress = this.onQuestionPress.bind(this);

    //Sets the state based on connectivity
    //Initializes the myQuestions state
    const handleFirstConnectivityChange = (isConnected) => {
      console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
      NetInfo.isConnected.removeEventListener(
        'change',
        handleFirstConnectivityChange
      );
      const result = this.state.isOnline === isConnected ? null : this.setState({ isOnline: isConnected });
      this.intializeComponent();
      return result;
    }
    NetInfo.isConnected.addEventListener(
      'change',
      handleFirstConnectivityChange
    );
  }

  //Populates state.myQuestions based connectivity
  intializeComponent() {
    if (this.state.isOnline) {
      fetch('https://c2g-question-maker.herokuapp.com/api/questions')
        .then(res => res.json())
        .then(resJson => {
          return AsyncStorage.setItem('myQuestions', JSON.stringify(resJson))
        })
        .then(() => {
          AsyncStorage.getItem('myQuestions')
            .then((value) => {
              var result = JSON.parse(value).reduce((prev, curr) => {
                return prev.concat(curr)
              }, []);
              this.setState(
                {
                  myQuestions: this.state.myQuestions.concat(result),
                  initializeCards: true
                })
            })
        })
    } else {
      //Used to clear local storage
      // AsyncStorage.setItem('myQuestions', JSON.stringify([]))

      AsyncStorage.getItem('myQuestions')
        .then((value) => {
          var result = JSON.parse(value).reduce((prev, curr) => {
            return prev.concat(curr)
          }, []);
          this.setState(
            {
              myQuestions: this.state.myQuestions.concat(result),
              initializeCards: true
            })
        })
    }
  }

  onQuestionPress(question) {
    this.props.navigator.push({ id: 'single-question-component', question: question })
  }
  render() {

    return (
      <Container style={styles.container}>
        <HeaderComponent navigator={this.props.navigator} style={styles.item} />

        <View style={{
          flex: 1
        }}>
        {/* DeckSwiper can only render dataSource once
        Boolean ensures that Questions are initialized beforehand */}
          {Boolean(this.state.initializeCards) && <DeckSwiper
            dataSource={this.state.myQuestions}
            renderItem={item => <TouchableOpacity onPress={() => {
              this.onQuestionPress(item)
            }}>
              <Card style={{
                backgroundColor: '#888888',
                elevation: 3
              }}>
                <CardItem style={{
                  backgroundColor: 'transparent'
                }}>
                  <Left>
                    <Thumbnail source={require('./img/fullstack.png')} />
                    <Body>
                      <Text>{item.title}</Text>
                      <Text not style={{
                        color: '#333'
                      }}>Medium</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody style={{
                  backgroundColor: '#aaaaaa',
                  padding: 10,
                  paddingTop: 10,
                  minHeight: 100,
                  alignItems: 'flex-start',
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10
                }}>
                  <Text>{item.description}</Text>
                </CardItem>
                <CardItem style={{
                  backgroundColor: 'transparent'
                }}>
                  <Icon name="heart" style={{
                    color: '#ED4A6A'
                  }} />
                  <Text style={{
                    color: '#ccc'
                  }}>{item.likes}</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>} />
          }
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <Text style={{
            textAlign: 'center',
            color: '#888888',
            fontWeight: 'bold'
          }}>{`<-- Swipe Left and Right for Questions  -->`}</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333'
  },
  item: {}
});