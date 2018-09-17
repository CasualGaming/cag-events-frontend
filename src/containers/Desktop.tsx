import * as React from 'react';
import { Container, Dropdown, Menu, Responsive } from 'semantic-ui-react';
import './Desktop.scss';

class Desktop extends React.Component {

  public render() {
    const { children } = this.props;
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Menu
            borderless={true}
            className="topmenu"
            size="large"
            inverted={true}
          >
            <Container >
              <Menu.Item>
                CaG
              </Menu.Item>
              <Menu.Item header={true}>Some LAN</Menu.Item>
              <Menu.Item as='a'>Sign up</Menu.Item>
              <Menu.Item as='a'>Competitions</Menu.Item>
              <Menu.Item as='a'>Sponsors</Menu.Item>

              <Menu.Menu position='right'>
                <Dropdown text='Dropdown' pointing={true} className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
        </Menu>
        {children}
      </Responsive>
    )
  }

}

export default Desktop;
