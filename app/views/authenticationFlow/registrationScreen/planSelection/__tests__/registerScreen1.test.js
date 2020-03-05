import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PlanSelection from '../planSelection';

describe('PlanSelection', () => {
    test('PlanSelection snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<PlanSelection />);
        expect(snapshot).toMatchSnapshot();
    });
});