import React from 'react';
import {View, Switch, Text} from 'react-native';

import ClipButtons from '../ClipButtons';

export default ({switchVal, onSwitchChange, onQuestionSwitchChange, switchQuestion, description, edit, showQuestion}) => {
    return (
        <View style={{ flex: 0.8 }}>
            <View>
                <Switch
                    value={switchVal}
                    onValueChange={(value) => {onSwitchChange(value)}} />
                <Text>Show Keyboard</Text>
            </View>
            <View>
                <Switch
                    value={showQuestion}
                    onValueChange={(value) => {onQuestionSwitchChange(value)}} />
                <Text>Show Question</Text>
                {
                    showQuestion ? <Text>{description}</Text> : null
                }
            </View>
            <ClipButtons edit={edit} />
        </View>
    )
}