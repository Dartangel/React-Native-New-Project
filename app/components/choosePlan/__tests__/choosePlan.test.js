import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ChoosePlan from '../index';

describe('ChoosePlan', () => {
    test('ChoosePlan snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<ChoosePlan />);
        expect(snapshot).toMatchSnapshot();
    });
});