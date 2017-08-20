import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import HomeComponent from './app/components/Home';
import AllQuestions from './app/components/AllQuestions';
import SingleQuestion from './app/components/SingleQuestion';
import CodeEnv from './app/components/CodeEnv';
import TestEnv from './app/components/TestEnv';
// import BetaQuestions from './app/components/AllQuestionsBeta';

export default class App extends React.Component {

  renderScene(route, navigator) {

    switch (route.id) {

      case 'homecomponent':
        return (<HomeComponent navigator={navigator} />);

      case 'all-questions-component':
        return (<AllQuestions navigator={navigator} />);

      case 'single-question-component':
        return (<SingleQuestion navigator={navigator} question={route.question} />);

      case 'Code-Env' :
        return (<CodeEnv navigator={navigator} question={route.question}/>);

      case 'back-code-env':
        return (<CodeEnv navigator={navigator} userAnswer={route.userAnswer} textStates={route.textStates} question={route.question} />);

      case 'test-env':
        return (<TestEnv navigator={navigator} userAnswer={route.userAnswer} tests={route.tests} textStates={route.textStates} description={route.description}/>);

      case 'beta-questions':
        return (<BetaQuestions navigator={navigator} />);

      default:
        return (<HomeComponent navigator={navigator} />);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'homecomponent' }}
        renderScene={this.renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromLeft} />
    );
  }
}
