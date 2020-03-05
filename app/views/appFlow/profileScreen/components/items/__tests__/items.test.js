import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Items from '../index';

describe('Items', () => {
    test('Items snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Items />);
        expect(snapshot).toMatchSnapshot();
    });
});