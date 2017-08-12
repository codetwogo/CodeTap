import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import {HomeComponent} from './app/components/Home';

export default class App extends React.Component {

  renderScene(route, navigator) {
    switch(route.id) {
      case 'homecomponent':
        return(<HomeComponent navigator={navigator}/>)
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'homecomponent'}}
        renderScene={this.renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom} />
    );
  }
}