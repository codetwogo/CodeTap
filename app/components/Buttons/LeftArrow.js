import React from 'react';
import { Switch, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';

export default ({shiftLeft}) => {
return (
                <Button
                  onPress={()=>shiftLeft()}>
                    <Text style={{color: '#444444'}}>
                      'Left'
                    </Text>
                  </Button>
      );
  };

  const styles = StyleSheet.create({

  });
