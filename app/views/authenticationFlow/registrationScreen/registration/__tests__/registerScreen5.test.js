import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Registration from '../registration';

describe('Registration', () => {
    test('Registration snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Registration />);
        expect(snapshot).toMatchSnapshot();
    });
});