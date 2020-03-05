import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ItemComponent from '../index';

describe('ItemComponent', () => {
    test('ItemComponent snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<ItemComponent />);
        expect(snapshot).toMatchSnapshot();
    });
});