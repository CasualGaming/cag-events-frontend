import * as React from 'react';
import {Status} from '../Status';

export const NoMatch = () => (
	<Status code={404}>
		<h1>Uable to find what you're looking for</h1>
	</Status>
);
