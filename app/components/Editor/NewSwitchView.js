import React from 'react';
import { Text, Switch, StyleSheet } from 'react-native';
import { Container, Button, View } from 'native-base';

import BasicKeyboard from './BasicKeyboard';
import SmartKeyboard from '../ClipButtons';

export default ({ switchVal, onSwitchChange, onQuestionSwitchChange, description, edit, showQuestion, undo, shiftLeft, shiftRight, del, space }) => {
  return (
    <Container style={styles.container}>
      <View style={styles.midRow}>
        <View style={{ flex: 1 }}>
          <Button
            onPress={() => undo()}
            style={styles.undoButton}>
            <Text style={styles.undoButtonText}>Undo</Text>
          </Button>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.middleText}>Hot Keys</Text>
          <Switch
            value={switchVal}
            onValueChange={(value) => onSwitchChange(value)} />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.middleText}>Detailed Question</Text>
          <Switch
            value={showQuestion}
            onValueChange={(value) => { onQuestionSwitchChange(value); }} />
        </View>
      </View>
      <View style={styles.keyboardContainer}>
        <View style={styles.keyboardContainerRow}>
          {
            showQuestion ?
              <Text style={styles.showQuestionText}>{description}</Text>
              :
              <View>
                {switchVal ?
                  <View style={styles.switchVal}>
                    <SmartKeyboard
                      edit={edit}
                    />
                  </View>
                  :
                  <BasicKeyboard
                    edit={edit}
                    shiftLeft={shiftLeft}
                    shiftRight={shiftRight}
                    del={del}
                    space={space}
                  />}
              </View>
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
  },
  undoButtonText: {
    color: '#444444'
  },
  middleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  middleText: {
    color: '#777777',
    fontSize: 13,
    width: 66,
    textAlign: 'right',
    paddingRight: 5
  },
  keyboardContainer: {
    flex: 1
  },
  keyboardContainerRow: {
    flex: 1,
    height: 75,
    justifyContent: 'flex-start'
  },
  showQuestionText: {
    flex: 2,
    color: '#779973',
    lineHeight: 22,
    padding: 5,
    alignItems: 'stretch'
  },
  switchVal: {
    flex: 1,
    minHeight: 100
  }
});
