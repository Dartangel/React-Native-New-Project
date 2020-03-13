import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import OwnBtn from '../index';

describe('OwnBtn', () => {
    test('OwnBtn snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<OwnBtn />);
        expect(snapshot).toMatchSnapshot();
    });
});