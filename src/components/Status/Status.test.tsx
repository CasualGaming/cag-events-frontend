import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Status } from './';
import { mount } from 'enzyme';

it('RendersWithoutCrashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<BrowserRouter>
			<Status code={404}>
				<h1>Test</h1>
			</Status>
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});

it('RendersPropsCorrect', () => {
	const wrapper = mount(
		<BrowserRouter>
			<Status code={400}>
				<h1>Test</h1>
			</Status>
		</BrowserRouter>
	);
	expect(wrapper.find('h1').length).toBe(2);
	expect(wrapper.find('#status-code').text()).toBe('400');
	expect(
		wrapper
			.find('h1')
			.last()
			.text()
	).toBe('Test');
});
