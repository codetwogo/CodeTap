import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, WebView} from 'react-native';
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button,
  Input,
  Content
} from 'native-base';

import HeaderComponent from './Header.js'

export default class TestEnvComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionTitle: '',
      userAnswer: this.props.userAnswer,
      tests: this.props.tests,
      questionDescription: '',
      textStates: this.props.textStates,
      isPassing: false,
      resultArr: []
    }

    this.evaluateTest = this.evaluateTest.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
    this.navigateToAllQuestions = this.navigateToAllQuestions.bind(this);
  }

  componentDidMount() {
    const resultArr = this.props.tests.map(test => {
      return this.evaluateTest(test);
    })

    const isPassing = resultArr.reduce((a, b) => {
      console.log('bbbbbb', b.pass)
      return a && b.pass
    }, {"pass": true});

    this.setState({
      tests: [...this.props.tests],
      //userAnswer: this.props.userAnswer,
      textStates: this.props.textStates,
      isPassing: isPassing,
      resultArr: resultArr
    })

  }

  navigateBack() {
    console.log(this.props.textStates)
    this.props.navigator.push({
      id: 'back-code-env',
      userAnswer: this.props.userAnswer,
      textStates: this.props.textStates,
      question: {
        description: this.props.description,
        tests: this.props.tests
      }
    })
  }

  navigateToAllQuestions() {
    this.props.navigator.push({id: 'all-questions-component'})
  }

  evaluateTest(test) {
    // assigns the string function from user input into callFunc variable
    var callFunc;

    eval(`callFunc = ${this.state.userAnswer}`);

    // stores result of running test with proper params
    var result;
    var error;

    // run try, catch to obtain errors and report back to the user
    try {
      result = eval(callFunc.apply(this, test.inputs))
    } catch (err) {
      error = err;
      console.log(err)
    }

    const output = test.output.toString();
    const resultStr = (error)
      ? 'N/A'
      : (result == undefined || result == null)
        ? '*** No result returned ***'
        : result.toString();

    return {
      error: error || null,
      inputs: test.inputs,
      output: output,
      result: resultStr,
      pass: (output == resultStr)
    }

    // return (
    //     <Text key={test.id}>
    //         {error ? `Error received: ${error}` : `The result of test with inputs of [${test.inputs}] \n An expected output of : ${output} \n Actually returned : ${resultStr} \n`}
    //     </Text>
    // )
  }

  webViewLoaded() {
    console.log('shit loaded!')

    var callFunc;
    
    eval(`callFunc = ${this.state.userAnswer}`);

    // callFunc = callFunc.bind(null, this.state.tests[0].inputs);

    // console.log('callfunc is: ', callFunc.toString());

    // var wrapper = function(callFunc) {
    //     return callFunc;
    // }

    // wrapper = wrapper.bind(null, callFunc);

    const dataObj = {
        func: callFunc.toString(),
        args: this.state.tests[0].inputs
    }

    this.webview.postMessage(JSON.stringify(dataObj));
}

getMessageFromWebView(data) {
    const keys = Object.keys(data.nativeEvent);
    console.log('data???', data.nativeEvent.data)
}


render() {

    return (
        
    <WebView 
        style={{marginTop: 20}}
        ref={webview => {this.webview = webview}}
        source={{html: require('../webviewScripts/load.html')}}
        onLoad={this.webViewLoaded.bind(this)}
        onMessage={this.getMessageFromWebView.bind(this)} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    paddingTop: 12,
    backgroundColor: '#333333'
  },
  topRowContainer: {
    flex: 1
  },
  resultButton: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#339933'

  },
  resultDetails: {
    paddingTop: 3,
    paddingBottom: 10
  },
  resultText: {
    color: '#dd0000',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 35,
    paddingBottom: 35,
    borderColor: '#dd0000',
    borderWidth: 2.5,
    backgroundColor: '#bbb'
  },
  inputOutput: {
    flex: 1,
    backgroundColor: '#555555',
    borderWidth: 1,
    borderColor: '#555555',
    padding: 15,
    paddingBottom: 15,
    borderRadius: 10
  }
});


//       <Container >
//         <HeaderComponent navigator={this.props.navigator} style={styles.item}/>
//         <Content style={styles.container}>
//           <View style={styles.topRowContainer}>
//             <View style={{
//               flex: 1,
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}>

//               <Text style={{
//                 flex: 1,
//                 textAlign: 'center',
//                 height: 25,
//                 paddingTop: 5,
//                 fontSize: 20,
//                 fontWeight: 'bold',
//                 color: '#aaaaaa'
//               }}>Result</Text>

//             </View>
//           </View>
//           {(this.state.isPassing)
//             ? <View>
//                 <Text style={StyleSheet.flatten([
//                   styles.resultText, {
//                     color: '#339933',
//                     borderColor: '#339933'
//                   }
//                 ])}>
//                   Congratulations,{`\n`}
//                   you've passed all the tests!!!!</Text>
//               </View>
//             : <View>
//               <Text style={styles.resultText}>
//                 Sadly, you've FAILED {`\n`}one or more tests!!!!</Text>
//             </View>
// }
//           {this.state.resultArr.map((result, idx) => {
//             return (
//               <View style={styles.resultDetails} key={idx}>
//                 {result.error
//                   ? `Error received: ${result.error}`
//                   : <View style={styles.inputOutput}>
//                     <Text style={{color: '#aaa'}}>Inputs: [{result.inputs}]
//                     </Text>
//                     <Text style={{color: '#66aa55'}}>Expected Output: {result.output}
//                     </Text>
//                     <Text style={{color: '#cc7777'}}>
//                       Actual Output : {result.result}
//                     </Text>
//                   </View>}
//               </View>
//             )
//           })
// }

//           {(this.state.isPassing)
//             ? <View>
//                 <Button style={styles.resultButton} onPress={this.navigateToAllQuestions}>
//                   <Text>Go back to all questions</Text>
//                 </Button>
//               </View>
//             : <View>
//               <Button danger style={StyleSheet.flatten([
//                 styles.resultButton, {
//                   backgroundColor: '#dd0000'
//                 }
//               ])} onPress={this.navigateBack}>
//                 <Text style={{color: '#aaa'}}>Try again</Text>
//               </Button>
//             </View>
// }
//         </Content>
//       </Container>