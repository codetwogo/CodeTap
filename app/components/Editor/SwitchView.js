import React from 'react';
import {Text, Switch, StyleSheet} from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button, Input, View } from 'native-base';


import ClipButtons from '../ClipButtons';

export default ({switchVal, onSwitchChange, onQuestionSwitchChange, switchQuestion, description, edit, showQuestion, undo}) => {
    return (
        <Container style={styles.container}>
          <View  style={styles.midRow}>
            <View style={{flex: 1}}>
              <Button
                onPress={ ()=> undo() }
                style={styles.undoButton}>
                <Text style={{color: '#444444'}}>Undo</Text>
              </Button>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text style={{color:'#444444', fontSize: 13, width: 66, textAlign: 'right', paddingRight: 5}}>Smart Keyboard</Text>
              <Switch
                value={switchVal}
                onValueChange={(value) => {onSwitchChange(value);}} />
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text style={{color:'#444444', fontSize: 13, width: 66, textAlign: 'right', paddingRight: 5}}>Detailed Question</Text>
              <Switch
                value={showQuestion}
                onValueChange={(value) => {onQuestionSwitchChange(value);}} />
            </View>
          </View>
          <View style={{flex:1}}>
            <View style={{ flex: 1, height:75,  justifyContent: 'flex-start' }}>
              {
                showQuestion ?
                <Text style={{flex: 2, lineHeight: 22,  padding: 5,  alignItems: 'stretch' }}>{description}</Text>
                : null
              }
              {
                switchVal ?
                <View style={{flex: 1, minHeight: 100}}>
                  <ClipButtons edit={edit}  />
                </View>
                :
                null
              }
            </View>
          </View>
        </Container>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  midRow: {
    flex: 1,
    maxHeight: 45,
    flexDirection: 'row',
    alignItems: 'center'
  },
  undoButton: {
    justifyContent: 'center',
    padding: 10,
    marginTop: 3,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 5,
    backgroundColor: '#cccccc'
  }
});
