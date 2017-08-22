import React from 'react';
import { View, Button, Switch, TouchableOpacity, StyleSheet} from 'react-native';
// import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';

export default ({edit}) => {
  const symbols = '-=[];,./';
  const nums = '`0123456789'.split('');
  const topRow = 'qwertyuiop'.split('');
  const middleRow = 'asdfghjkl'.split('');
  const bottomRow = 'zxcvbnm'.split('');

  const capnums = '~!@#$%^&*()_+'.split('');
  const captopRow = 'QWERTYUIOP{}|'.split('');
  const capmiddleRow = 'ASDFGHJKL:"'.split('');
  const capbottomRow = 'ZXCVBNM<>?'.split('');

  const keys = [nums, topRow, middleRow, bottomRow];
  const upperkeys = [];
    return (
        <View style={styles.container}>
          {keys.map((row)=>{
            return (
              <View style={styles.keyrow} key={row}>
              {row.map((key)=>{
            return (
              <Button title={key} key={key}
                onPress={() =>
                  edit(key)
                }/>
            );
          }
          )}
        </View>);
      })}
        </View>
      );
};

const styles = StyleSheet.create( {
  container: {
    flexWrap: 'wrap',
    alignItems:'flex-start',
    justifyContent: 'center'
  },
    keyrow: {
      flexDirection: 'row',
    }
  });
