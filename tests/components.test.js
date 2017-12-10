import React from 'react';

import {
    setTextChange,
    setShiftLeft,
    setShiftRight,
    setDelete
} from '../app/components/utils/CodeEnv.utils';

describe('Our CodeEnv utils functions file has a setTextChange method...', () => {

    const someText = 'Here we will add: to the text.';
    const focus = 17;
    const textStates = [];

    const addedStr = 'monkey';

    // ensures when text is added all proper state properties change
    const newStateAfterTextChange = setTextChange(someText, focus, addedStr, textStates);

    it('that returns a new body, focus, and correct text states with the added text.', () => {
        expect(newStateAfterTextChange.inputBody).toBe('Here we will add:monkey|to the text.');
    })

    it('that has the correct focus after inserting.', () => {
        expect(newStateAfterTextChange.focus).toBe(23);
    })

    it('that has the correct text states after inserting.', () => {
        expect(newStateAfterTextChange.textStates.length).toBe(1);
    })
})

describe('CodeEnv\'s shift left method...', () => {
    const resultAfterShiftLeft = setShiftLeft('test|ing', 4);
    it('shifts left properly, accounts for | and focus.', () => {
        expect(resultAfterShiftLeft.focus).toBe(3);
        expect(resultAfterShiftLeft.inputBody).toBe('tes|ting');
    })
})