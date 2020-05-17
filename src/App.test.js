import { render, wait, waitForElement } from '@testing-library/react';
import { withProvider } from 'utils/testUtils';
import { _App } from './App';

const AppWithProvider = withProvider(_App);

describe('<App />', () => {
    const props = {
        isAuth: false,
    };

    // eslint-disable-next-line
    const setup = props => {
        const utils = render(AppWithProvider(props));
        return { ...utils };
    };

    it('renders <App /> component', async () => {
        const { asFragment } = setup(props);
        await wait(); // wait for import to be resolved

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders <Spinner /> when `isAuth` prop is null', async () => {
        const { getByTestId } = setup({ ...props, isAuth: null });
        const spinner = await waitForElement(() => getByTestId('Spinner'));

        expect(spinner).toBeInTheDocument();
    });
});
