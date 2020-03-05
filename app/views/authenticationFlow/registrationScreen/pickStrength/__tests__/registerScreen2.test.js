import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PickStrength from '../pickStrength';

describe('PickStrength', () => {
    test('PickStrength snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<PickStrength />);
        expect(snapshot).toMatchSnapshot();
    });
});