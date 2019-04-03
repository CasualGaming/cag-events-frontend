import App from './containers/App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
