import React from 'react';
import {View, Switch, Text, TouchableOpacity} from 'react-native';


export default ({edit}) => {
  const nums = [0,1,2,3,4,5,6,7,8,9];
    return (
        <View>
          {nums.map((num)=>{
            return(
              <TouchableOpacity onPress={()=>edit(num)}>
              <Text>
                {num}
                </Text>
                </TouchableOpacity>
            );
          })}
        </View>
    );
};
