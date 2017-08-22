import React from 'react';
import { Switch, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';

export default ({shiftRight}) => {
  return (
                  <Button
                    onPress={()=>shiftRight()}>
                      <Text style={{color: '#444444'}}>
                        'Right'
                      </Text>
                    </Button>
        );
    };

    const styles = StyleSheet.create({
    });
