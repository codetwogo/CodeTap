import React from 'react';
import { Switch, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';


export default ({edit}) => {
  const nums = '0123456789'.split('');
    return (
        <View>
          {nums.map((num)=>{
            return(
              <Button key={num}
                onPress={() =>
                  edit(num)
                }>
                  <Text style={{color: '#444444'}}>
                    {num}
                  </Text>
                </Button>
            );
          })}
        </View>
    );
};

const styles = StyleSheet.create({
});
