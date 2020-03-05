import React from 'react';
import { Segment, Sidebar, Menu, Icon } from 'semantic-ui-react';

const UserMenu = props => {
	const { displayUserMenu, userMenuShown } = props;
	return (
    <Sidebar
      as={Segment}
      animation="overlay"
      icon="labeled"
      inverted
      onHide={displayUserMenu}
      direction={"top"}
      visible={userMenuShown}
      width="thin"
      color="teal"
    >
      <Menu >
        <Menu.Item as="a" position="right">
          <Icon name="home" />
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="cog" />
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="heart" />
        </Menu.Item>
      </Menu>
    </Sidebar>
  );
};

export default UserMenu;
