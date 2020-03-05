import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SliderComponent from '../index';

describe('SliderComponent', () => {
    test('SliderComponent snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<SliderComponent />);
        expect(snapshot).toMatchSnapshot();
    });
});