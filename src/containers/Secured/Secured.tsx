import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { isAuth, login, logout, keycloakInit } from '../../redux/flux/auth';
import { StoreState } from '../../redux/reducers';
import { KeycloakInitOptions } from 'keycloak-js';
import { Button } from 'semantic-ui-react';

export interface SecuredProps {
	authenticated: boolean;
	init: (options: Keycloak.KeycloakInitOptions) => void;
	login: () => void;
	logout: () => void;
}

class Secured extends React.PureComponent<SecuredProps> {
	constructor(props: SecuredProps) {
		super(props);
	}

	public componentDidMount() {
		this.props.init({ onLoad: 'check-sso' });
	}

	public render() {
		if (this.props.authenticated) {
			return (
				<div>
					<Button onClick={this.props.logout}>Logout</Button>
					<p>
						This is a Keycloak-secured component of your application. You shouldn't be able to see this unless you've
						authenticated with Keycloak.
					</p>
				</div>
			);
		} else {
			return (
				<div>
					Unable to authenticate!
					<Button onClick={this.props.login}>Login</Button>
				</div>
			);
		}
	}
}

const mapStateToProps = (state: StoreState) => ({
	authenticated: isAuth(state.auth)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	init: (options: Keycloak.KeycloakInitOptions) => dispatch(keycloakInit(options)),
	login: () => dispatch(login()),
	logout: () => dispatch(logout())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Secured);
