import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.onBackPress = this.onBackPress.bind(this);

  }

  onBackPress() {
      this.props.navigator.push({ id: 'all-questions-component' })
  }
  onCancelPress() {
      this.props.navigator.push({ id: 'homecomponent' })
  }

  render() {
    return (
        <Header>
          <Left>
            <Button transparent onPress={()=>
              this.onBackPress()
            }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Code Tap</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>
              this.onCancelPress()
            }>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
    );
  }
}