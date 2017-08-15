import React, { Component } from 'react';

import { View, Text } from 'react-native';



export default class TestEnvComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionTitle: '',
            tests: [],
            questionDescription: ''
        }

        this.evaluateTest = this.evaluateTest.bind(this);
    }

    componentDidMount() {
        // initialize with a dummy question *** replace with bottom section code when ready
        this.setState({
            questionTitle: 'A Dummy Question',
            questionDescription: 'Return true if the input is 5',
            tests: [
                { id: 1, inputs: [1], output: [false] },
                { id: 2, inputs: [2], output: [false] },
                { id: 3, inputs: [5], output: [true] }
            ],
            userAnswer: "function (num) {return num2 === 5}"
        })

        // ****  Once we integrate with components, run following code: **** //
        /*
            this.setState({
                tests: [this.props.tests],
                userAnswer: this.props.userAnswer
            })
        */
    }

    evaluateTest(test) {
        // assigns the string function from user input into callFunc variable
        eval(`const callFunc = ${this.state.userAnswer}`);

        // stores result of running test with proper params
        var result;
        var error;

        // run try, catch to obtain errors and report back to the user
        try {
            const result = eval(callFunc.apply(this, test.inputs))
        }
        catch(err) {
            error = err;
            console.log(err)
        }

        const output = test.output.toString();
        const resultStr = (error) ? 'N/A' : result.toString();

        return (
            <Text key={test.id}>
                {error ? `Error received: ${error}` : `The result of test with inputs of ${test.inputs} and an expected output of : ${output} have actually returned : ${resultStr}`}
            </Text>
        )
    }

    render() {
        return (
            <View>
                {
                    this.state.tests.map(test => {
                        return (
                            this.evaluateTest(test)
                        )
                    })
                }
            </View>
        )
    }
}