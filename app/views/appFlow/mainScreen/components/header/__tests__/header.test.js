import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../header';

describe('Header', () => {
    test('Header snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Header />);
        expect(snapshot).toMatchSnapshot();
    });
});