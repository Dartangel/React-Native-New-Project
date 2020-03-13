import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Weight from '../index';

describe('Weight', () => {
    test('Weight snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Weight />);
        expect(snapshot).toMatchSnapshot();
    });
});