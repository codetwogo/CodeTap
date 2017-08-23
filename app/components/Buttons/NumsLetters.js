import React from 'react';
import {Switch, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Input
} from 'native-base';

export default({edit, shiftLeft, shiftRight, del, space}) => {
  const nums = '1234567890'.split('');
  const topRow = 'qwertyuiop'.split('');
  const middleRow = 'asdfghjkl'.split('');
  const bottomRow = 'zxcvbnm'.split('');
  const funcs= [
    {title:'<<  |', output:shiftLeft, flx: 1},
    {title:'Space', output:space, flx: 2},
    {title:'Del', output:del, flx: 1},
    {title:'|  >>', output:shiftRight, flx: 1}]

  const capnums = '~!@#$%^&*()_+'.split('');
  const captopRow = 'QWERTYUIOP{}|'.split('');
  const capmiddleRow = 'ASDFGHJKL:"'.split('');
  const capbottomRow = 'ZXCVBNM<>?'.split('');

  const keys = [nums, topRow, middleRow, bottomRow];
  const upperkeys = [];

  return (
    <View style={styles.container}>
      {keys.map((row) => {
        return (
          <View key={row} style={styles.smallContainer}>
            {row.map((key) => {
              return (
                <TouchableOpacity style={styles.hotKey} key={key} onPress={() => edit(key)} >
                  <Text style={styles.buttonText}>{key}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })
    }
      <View style={styles.smallContainer}>
      {funcs.map((func)=> {
        let flx= func.flx
      return(
        <TouchableOpacity style={StyleSheet.flatten([
          styles.funcKey, {
            flex: flx
          }
        ])} key={func.title} onPress={() => func.output()} >
          <Text style={styles.funcButtonText}>
            {func.title}
          </Text>
          </TouchableOpacity>
      )}
    )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 50,
    padding: 10,
    paddingLeft: 45,
    paddingRight: 45,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  smallContainer: {
    minWidth: 360,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  hotKey: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    width: 30,
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 5,
    backgroundColor: '#999999'
  },
  funcKey: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#888888',
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    margin: 3,
    borderWidth: 1
  },
  buttonText: {
    color: '#444444'
  },
  funcButtonText: {
    color: '#999999'
  }
});
