import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import InputValue from '../index';

describe('InputValue', () => {
    test('InputValue snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<InputValue />);
        expect(snapshot).toMatchSnapshot();
    });
});