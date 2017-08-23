import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class CodeHeader extends Component {
  constructor(props){
    super(props);
    this.onBackPress = this.onBackPress.bind(this);
  }

  onBackPress() {
      this.props.navigator.push({ id: 'all-questions-component' })
  }

  render() {
    return (
        <Header>
          <Left>
            <Button transparent onPress={()=>
              this.onBackPress()
            }>
              <Icon name='arrow-back' style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Title>{`CodeTap`}</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>
              this.props.submit()
            }>
              <Text style={{color: '#7D1b13'}}>Submit</Text>
            </Button>
          </Right>
        </Header>
    );
  }
}