import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';
import {createRenderer} from 'react-test-renderer/shallow';
import {isDOMComponent, isComponentOfType, findWithType} from 'react-shallow-testutils';

const shallowRender = new createRenderer();

describe('The main App Entry Point...', () => {

    it('renders without crashing', () => {
        const rendered = renderer.create(<App />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('contains a navigator element', () => {
        const rendered = shallowRender.render(<App />);
        console.log(rendered.getRenderOutput());
    })
})

