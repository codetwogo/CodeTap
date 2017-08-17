import React, { Component } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';



export default class TestEnvComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionTitle: '',
            tests: [],
            questionDescription: '',
            textStates: this.props.textStates,
            pass: false
        }

        this.evaluateTest = this.evaluateTest.bind(this);
        this.navigateBack = this.navigateBack.bind(this);
    }

    componentDidMount() {
        this.setState({
            tests: [...this.props.tests],
            userAnswer: this.props.userAnswer,
            textStates: this.props.textStates
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
        console.log('placeholder')
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
        }
        catch (err) {
            error = err;
            console.log(err)
        }
        

        const output = test.output.toString();
        const resultStr = (error) 
        ? 'N/A' 
        : (!result) 
            ? '***No result returned from function***'
            : result.toString();

        if (output === resultStr) {
            this.setState({
                pass: true
            })
        }

        return (
            <Text key={test.id}>
                {error ? `Error received: ${error}` : `The result of test with inputs of [${test.inputs}] \n An expected output of : ${output} \n Actually returned : ${resultStr} \n`}
            </Text>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.navigateBack}
                    title='Back to Code Env' />
                {
                    this.state.tests.map(test => {
                        return (
                            this.evaluateTest(test)
                        )
                    })
                }

                {
                    (this.state.pass)
                    ? <View>
                        <Text> Congratulations you passed all the tests!!!!</Text>
                        <Button 
                            onPress={this.navigateToAllQuestions}
                            title='Go back to all questions'/>
                      </View>
                    : <View>
                        <Text> Sadly, you failed one or more tests!!!!</Text>
                        <Button 
                            onPress={this.navigateBack}
                            title='Try again'/>
                      </View>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    textInput: {
      margin: 15,
      height: 200,
      borderWidth: 1
    },
  });
  