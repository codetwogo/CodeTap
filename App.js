import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import HomeComponent from './app/components/Home';
import AllQuestions from './app/components/AllQuestions';
import SingleQuestion from './app/components/SingleQuestion';
import KeyInput from './app/components/KeyInput';

export default class App extends React.Component {

  renderScene(route, navigator) {

    switch (route.id) {

      case 'homecomponent':
        return (<HomeComponent navigator={navigator} />);

      case 'all-questions-component':
        return (<AllQuestions navigator={navigator} />);

      case 'single-question-component':
        return (<SingleQuestion navigator={navigator} question={route.question} />);

        case 'Key-Input' :
          return (<KeyInput navigator={navigator}/>);

      default:
        return (<HomeComponent navigator={navigator} />);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'homecomponent' }}
        renderScene={this.renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom} />
    );
  }
}
