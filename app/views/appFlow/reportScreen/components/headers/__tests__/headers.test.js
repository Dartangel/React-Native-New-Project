import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Headers from '../headers';

describe('Headers', () => {
    test('Headers snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Headers />);
        expect(snapshot).toMatchSnapshot();
    });
});