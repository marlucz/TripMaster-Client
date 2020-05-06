import React from 'react';
import { render } from '@testing-library/react';
import EditItems from './EditItems';

describe('<EditItems />', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<EditItems />);
        expect(asFragment()).toMatchSnapshot();
    });
});
