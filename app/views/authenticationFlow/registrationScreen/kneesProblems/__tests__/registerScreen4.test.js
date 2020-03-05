import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import KneesProblems from '../kneesProblems';

describe('KneesProblems', () => {
    test('KneesProblems snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<KneesProblems />);
        expect(snapshot).toMatchSnapshot();
    });
});