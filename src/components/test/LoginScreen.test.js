import { render } from '@testing-library/react';
import LoginScreen from './LoginScreen';

test('matches snapshot', () => {
    const { asFragment } = render(<LoginScreen />);
    expect(asFragment()).toMatchSnapshot();
});
