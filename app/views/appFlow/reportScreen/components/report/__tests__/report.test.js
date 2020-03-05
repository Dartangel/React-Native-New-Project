import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Report from '../report';

describe('Report', () => {
    test('Report snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Report />);
        expect(snapshot).toMatchSnapshot();
    });
});