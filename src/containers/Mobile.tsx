import * as React from 'react';
import { Button, Container, Icon, Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react';

class Mobile extends React.Component {
  public state = {isSideOpen: false};

  public render() {
    const { children } = this.props;
    const { isSideOpen} = this.state;
    
    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="uncover" inverted={true} vertical={true} visible={isSideOpen}>
            <Menu.Item as="a" active={true}>Home</Menu.Item>
            <Menu.Item as="a">Sign up</Menu.Item>
            <Menu.Item as="a">Competitions</Menu.Item>
            <Menu.Item as="a">Sponsors</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={isSideOpen} onClick={this.handlePusherClick} style={{minHeight: '100vh'}}>
            <Segment inverted={true} textAlign="center" style={{padding: "1em 0em"}} vertical={true}>
              <Container>
                <Menu inverted={true} pointing={true} secondary={true} size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar"/>
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted={true}>Login</Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }

  private handlePusherClick = () => {
    if (this.state.isSideOpen) {
      this.setState({isSideOpen: false})
    }
  }

  private handleToggle = () => {
    this.setState({isSideOpen: !this.state.isSideOpen})
  }

}

export default Mobile;
