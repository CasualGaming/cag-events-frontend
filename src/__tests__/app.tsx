import App from '@/containers/App';
import 'jest-dom/extend-expect';
import * as React from 'react';
import { render } from "react-testing-library";
import 'react-testing-library/cleanup-after-each';

test('render app', () => {
    const container = render(<App /> )
    const header = container.getByTestId('test')
    expect(header).toHaveTextContent(/welcome/i)
})