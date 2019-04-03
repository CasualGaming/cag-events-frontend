import './Desktop.scss';
import * as React from 'react';
import { Container, Dropdown, Menu, Responsive } from 'semantic-ui-react';
import { AuthMenu } from '../components/AuthMenu';

class Desktop extends React.Component {
	public render() {
		const { children } = this.props;
		return (
			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Menu borderless={true} className="topmenu" size="large" inverted={true}>
					<Container>
						<Menu.Item>CaG</Menu.Item>
						<Menu.Item header={true}>Some LAN</Menu.Item>
						<Menu.Item as="a">Sign up</Menu.Item>
						<Menu.Item as="a">Competitions</Menu.Item>
						<Menu.Item as="a">Sponsors</Menu.Item>

						<Menu.Menu position="right">
							<AuthMenu />
						</Menu.Menu>
					</Container>
				</Menu>
				{children}
			</Responsive>
		);
	}
}

export default Desktop;
