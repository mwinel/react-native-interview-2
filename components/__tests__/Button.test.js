import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../Button';

describe('Button', () => {
    it(`renders button component correctly`, () => {
        const handlePress = jest.fn();
        const { getByText } = render(
            <Button title="Test Button" onPress={handlePress} />
        );
        const buttonElement = getByText('Test Button');

        expect(buttonElement).toBeTruthy();
        expect(handlePress).not.toHaveBeenCalled();
    });

    it(`fires onPress event handler`, () => {
        const handlePress = jest.fn();
        const { getByText } = render(
            <Button title="Test Button" onPress={handlePress} />
        );
        const buttonElement = getByText('Test Button');

        fireEvent.press(buttonElement);

        expect(handlePress).toHaveBeenCalled();
    });
});
