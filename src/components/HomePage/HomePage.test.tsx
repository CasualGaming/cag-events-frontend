import * as React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from "enzyme";
import {HomePage} from './HomePage';

it('RenderWithoutCrashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomePage/>, div);
    ReactDOM.unmountComponentAtNode(div);
});