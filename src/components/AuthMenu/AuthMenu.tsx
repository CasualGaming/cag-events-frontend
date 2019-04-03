import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { isAuth, login, logout, keycloakInit, register, fetchProfile, getUserProfile } from '../../redux/flux/auth';
import { Dropdown, Menu } from 'semantic-ui-react';
import { StoreState } from '../../redux/reducers';
import { stat } from 'fs';

export interface AuthMenuProps {
	authenticated: boolean;
	userProfile: any; // TODO update
	init: (options: Keycloak.KeycloakInitOptions) => void;
	fetchProfile: () => void;
	login: () => void;
	logout: () => void;
	register: () => void;
}

class AuthMenu extends React.PureComponent<AuthMenuProps> {
	constructor(props: AuthMenuProps) {
		super(props);
	}

	public componentDidMount() {
		this.props.init({ onLoad: 'check-sso' });
	}
	public componentDidUpdate(prevProps: AuthMenuProps) {
		if (prevProps.authenticated === false && this.props.authenticated === true) {
			this.props.fetchProfile();
		}
	}

	public render() {
		if (this.props.authenticated) {
			return [
				this.props.userProfile ? (
					<Dropdown text="Dropdown" pointing={true} className="link item">
						<Dropdown.Menu>
							<Dropdown.Item>List Item</Dropdown.Item>
							<Dropdown.Item>List Item</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Header Item</Dropdown.Header>
							<Dropdown.Item>
								<i className="dropdown icon" />
								<span className="text">Submenu</span>
								<Dropdown.Menu>
									<Dropdown.Item>List Item</Dropdown.Item>
									<Dropdown.Item>List Item</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown.Item>
							<Dropdown.Item>List Item</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				) : null,
				<Menu.Item onClick={this.props.logout}>Logout</Menu.Item>
			];
		} else {
			return [
				<Menu.Item onClick={this.props.login}>Log in</Menu.Item>,
				<Menu.Item onClick={this.props.register}>Register</Menu.Item>
			];
		}
	}
}

const mapStateToProps = (state: StoreState) => ({
	authenticated: isAuth(state.auth),
	userProfile: getUserProfile(state.auth)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	init: (options: Keycloak.KeycloakInitOptions) => dispatch(keycloakInit(options)),
	fetchProfile: () => dispatch(fetchProfile()),
	login: () => dispatch(login()),
	logout: () => dispatch(logout()),
	register: () => dispatch(register())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthMenu);
