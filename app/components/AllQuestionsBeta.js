import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  { id: 'single-question-component', title: 'Question1', tests: 'test', boilerPlate: 'function(word){\n\t\n}', description: `If you're faced with an input box, like this:

                                           +--------------+
  Enter the price of the item, in dollars: |              |
                                           +--------------+
do you put the $ sign in, or not? Inevitably, some people will type a $ sign and others will leave it out. The instructions could be made clearer - but that won't help those annoying people who never read instructions anyway...` ,image: require('./img/fullstack.png') },
  { id: 'single-question-component', title: 'Question2', tests: 'test2', boilerPlate: 'function(word2){\n\t\n}', description: 'Enter question Description of New Problem here',image: require('./img/fullstack.png') },
  { id: 'single-question-component', title: 'Question3', tests: 'test3', boilerPlate: 'function(word3){\n\t\n}', description: 'Enter question Description', image: require('./img/front-page.png') }
];
export default class DeckSwiperExample extends Component {
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
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Text>{item.description}
                  </Text>
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}