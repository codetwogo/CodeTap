import React from 'react';
import { Switch, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';


export default ({edit}) => {
  const bottomRow = 'zxcvbnm,./'.split('');
    return (
        <View style={styles.container}>
          {bottomRow.map((letter)=>{
            return(
              <Button key={letter} style={styles.hotKey}
                onPress={() => {
                  edit(letter);
                  }
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
