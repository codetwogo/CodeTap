import React from 'react';
import { Switch, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';


export default ({edit}) => {
  const middleRow = 'asdfghjkl;'.split('');
    return (
              <View style={styles}>
                {middleRow.map((letter)=>{
                  return(
                    <Button key={letter} style={styles}
                      onPress={() =>
                        edit(letter)
                      }>
                        <Text style={{color: '#444444'}}>
                          {letter}
                        </Text>
                      </Button>
                  );
                })}
              </View>
          );
      };

      const styles = StyleSheet.create({
      });
