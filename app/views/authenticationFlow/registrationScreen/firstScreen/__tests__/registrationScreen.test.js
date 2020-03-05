import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FirstScreen from '../firstScreen';

describe('FirstScreen', () => {
    test('FirstScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<FirstScreen />);
        expect(snapshot).toMatchSnapshot();
    });
});