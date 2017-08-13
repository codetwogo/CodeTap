import React from 'react';
import App from '../App';
import Home from '../app/components/Home';
import AllQuestions from '../app/components/AllQuestions';
import SingleQuestion from '../app/components/SingleQuestion';

import renderer from 'react-test-renderer';
//import {shallow} from 'enzyme';
import shallowRenderer from 'react-test-renderer/shallow';
import { isDOMComponent, isComponentOfType, findWithType } from 'react-shallow-testutils';

const shallow = new shallowRenderer();

describe('The main App Entry Point...', () => {

    const component = renderer.create(<App />)

    it('renders without crashing', () => {
        const rendered = component.toJSON();
        expect(rendered).toBeTruthy();
    });

    it('matches snapshot', () => {
        const rendered = component.toJSON();
        expect(rendered).toMatchSnapshot();
        // console.log(rendered.find('Navigator'));
    })
})

describe('The Home Component...', () => {

    const component = renderer.create(<Home />)

    it('renders without crashing', () => {
        const rendered = component;
        expect(rendered).toBeTruthy();
    });

    it('matches snapshot', () => {
        const rendered = component.toJSON();
        expect(rendered).toMatchSnapshot();
    })
})

describe('The AllQuestions Component...', () => {

    const component = renderer.create(<AllQuestions />)

    it('renders without crashing', () => {
        const rendered = component.toJSON();
        expect(rendered).toBeTruthy();
    });

    it('matches snapshot', () => {
        const rendered = component.toJSON();
        expect(rendered).toMatchSnapshot();
        // console.log(rendered.find('Navigator'));
    })
})

describe('The SingleQuestion Component...', () => {

    const component = renderer.create(<SingleQuestion question={{
<<<<<<< HEAD
        id: 'single-question-component',
        title: 'testing-question',
        tests: 'tests',
        boilerPlate: '1234'
=======
        id: 'single-component',
        title: 'test-title',
        tests: '1234',
        boilerPlate: 'function(){}'
>>>>>>> 1889a4d44355ceacdc9634457fbf4938085e56ef
    }} />)

    it('renders without crashing', () => {
        const rendered = component.toJSON();
        expect(rendered).toBeTruthy();
    });

    it('matches snapshot', () => {
        const rendered = component.toJSON();
        expect(rendered).toMatchSnapshot();
        // console.log(rendered.find('Navigator'));
    })
})