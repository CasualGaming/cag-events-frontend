import { Provider } from 'react-redux';
import { NoMatch } from '../components/NoMatch';
import { HomePage } from './HomePage';
import { Secured } from '../containers/Secured';
import store from '../redux/store';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

interface AppProps {}
class App extends React.Component {
	private _store: any;

	constructor(props: AppProps) {
		super(props);
		this._store = store;
	}

	public render() {
		return (
			<Provider store={this._store}>
				<Router>
					<div>
						<Switch>
							<Route exact={true} path="/" component={HomePage} />
							<Route exact={true} path="/secured" component={Secured} />
							<Route component={NoMatch} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
