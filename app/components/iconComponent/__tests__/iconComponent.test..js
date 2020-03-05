import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconComponent from '../index';

describe('IconComponent', () => {
    test('IconComponent snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<IconComponent />);
        expect(snapshot).toMatchSnapshot();
    });
});