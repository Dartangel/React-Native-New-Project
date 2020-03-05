import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Settings from '../settings';

describe('Settings', () => {
    test('Settings snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Settings />);
        expect(snapshot).toMatchSnapshot();
    });
});