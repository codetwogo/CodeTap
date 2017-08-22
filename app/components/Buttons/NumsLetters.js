import React from 'react';
import { Switch, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';

export default ({edit}) => {
  const nums = '`0123456789-='.split('');
  const topRow = 'qwertyuiop[]'.split('');
  const middleRow = 'asdfghjkl;'.split('');
  const bottomRow = 'zxcvbnm,./'.split('');

  const capnums = '~!@#$%^&*()_+'.split('');
  const captopRow = 'QWERTYUIOP{}|'.split('');
  const capmiddleRow = 'ASDFGHJKL:"'.split('');
  const capbottomRow = 'ZXCVBNM<>?'.split('');

  const keys = [nums, topRow, middleRow, bottomRow];
  const upperkeys = [];
    return (
        <View>
          {keys.map((row)=>{
            return (
              <View key={row}>
              {row.map((key)=>{
            return (
              <Button key={key}
                onPress={() =>
                  edit(key)
                }>
                  <Text style={{color: '#444444'}}>
                    {key}
                  </Text>
                </Button>
            );
          }
          )}
        </View>);
      })}
        </View>
      );
};

const styles = StyleSheet.create({
  });
