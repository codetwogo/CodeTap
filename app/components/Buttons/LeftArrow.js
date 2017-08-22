import React from 'react';
import { Switch, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';

export default ({shiftLeft}) => {
return (
                <Button style={styles.hotKey}
                  onPress={()=>shiftLeft()}>
                    <Text style={{color: '#444444'}}>
                      'Left'
                    </Text>
                  </Button>
      );
  };

  const styles = StyleSheet.create({
    container: {
      padding: 4,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    hotKey: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      padding: 10,
      marginTop: 3,
      marginLeft: 1,
      marginRight:1,
      marginBottom: 5,
      backgroundColor: '#999999'
    }
  });
