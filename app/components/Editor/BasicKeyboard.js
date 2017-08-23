import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, Button, Text, TouchableOpaci} from 'react-native';
import NumsLetters from '../Buttons/NumsLetters';
export default class BasicKeyboard extends Component {
  constructor(props) {
    super(props);
    this.state={
      caps:false
    };
    this.changeCaps=this.changeCaps.bind(this);
  }
  changeCaps(){
    let newState = !this.state.caps;
    this.setState({
      caps:newState
    });
  }
  render(){
    return (
      <View style={styles.container}>
          <NumsLetters
            edit={this.props.edit} shiftLeft={this.props.shiftLeft}
            shiftRight={this.props.shiftRight}
            del={this.props.del}
            space={this.props.space}
            capslock={this.changeCaps}
            caps={this.state.caps}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});
