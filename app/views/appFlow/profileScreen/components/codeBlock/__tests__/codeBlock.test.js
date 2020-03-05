import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CodeBlock from '../index';

describe('CodeBlock', () => {
    test('CodeBlock snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<CodeBlock />);
        expect(snapshot).toMatchSnapshot();
    });
});