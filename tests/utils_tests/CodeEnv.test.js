import { expect } from 'chai';
 
import {
    setTextChange,
    setShiftLeft,
    setShiftRight,
    setDelete
} from '../../components/utils/CodeEnv.utils';


describe('Our CodeEnv utils functions file...', () => {

    it('has a setTextChange method that...', () => {

        it('returns a new body, focus, and correct text states with the added text.', () => {
            const someText = 'Here we will add: to the text.';
            const focus = 17;
            const textStates = [];
            
            const addedStr = 'monkey ';

            const newStateAfterTextChange = setTextChange(someText, focus, textStates);

            expect(newStateAfterTextChange.inputBody).to.equal('Here we will add:monkey to the text.');
            expect(newStateAfterTextChange.focus).to.equal(23);
            expect(newStateAfterTextChange.textStates.length).to.equal(1);

            
        })
    })
})
