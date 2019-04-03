import ReactDOM from "react-dom";
import * as React from "react";
import {NoMatch} from "./NoMatch";
import {BrowserRouter} from "react-router-dom";

it('RenderWithoutCrashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><NoMatch/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
})