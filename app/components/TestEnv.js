import React, { Component } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';



export default class TestEnvComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionTitle: '',
            userAnswer: this.props.userAnswer,
            tests: [],
            questionDescription: '',
            textStates: this.props.textStates,
            isPassing: false,
            resultArr: []
        }

        this.evaluateTest = this.evaluateTest.bind(this);
        this.navigateBack = this.navigateBack.bind(this);
    }

    componentDidMount() {
        const resultArr = this.props.tests.map(test => {
            return this.evaluateTest(test);
        })

        const isPassing = resultArr.reduce((a, b) => {
            console.log('bbbbbb', b.pass)
            return a && b.pass
        }, {"pass":true});

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
        this.props.navigator.push({
            id: 'all-questions-component'
        })
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
            : (result == undefined || result == null)
                ? '***No result returned from function***'
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

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.resultArr.map(result => {
                        return (
                            <Text>
                                {result.error ? `Error received: ${result.error}` : `The result of test with inputs of [${result.inputs}] \n An expected output of : ${result.output} \n Actually returned : ${result.result} \n`}
                            </Text>
                        )
                    })
                }

                {
                    (this.state.isPassing)
                        ? <View>
                            <Text> Congratulations you passed all the tests!!!!</Text>
                            <Button
                                onPress={this.navigateToAllQuestions}
                                title='Go back to all questions' />
                        </View>
                        : <View>
                            <Text> Sadly, you failed one or more tests!!!!</Text>
                            <Button
                                onPress={this.navigateBack}
                                title='Try again' />
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
