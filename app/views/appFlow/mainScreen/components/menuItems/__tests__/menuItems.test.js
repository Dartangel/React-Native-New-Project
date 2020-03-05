import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MenuItems from '../index';

describe('MenuItems', () => {
    test('MenuItems snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<MenuItems />);
        expect(snapshot).toMatchSnapshot();
    });
});