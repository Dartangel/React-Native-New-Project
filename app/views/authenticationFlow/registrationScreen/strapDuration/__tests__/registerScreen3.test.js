import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import StrapDuration from '../strapDuration';

describe('StrapDuration', () => {
    test('StrapDuration snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<StrapDuration />);
        expect(snapshot).toMatchSnapshot();
    });
});