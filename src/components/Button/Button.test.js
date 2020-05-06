import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<Button />);
        expect(asFragment()).toMatchSnapshot();
    });
});
