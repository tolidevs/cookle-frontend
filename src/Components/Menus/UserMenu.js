import React from 'react';
import { Segment, Sidebar, Menu, Icon } from 'semantic-ui-react';

const UserMenu = props => {
  const {
    userMenuShown,
    showLogOut,
    setPage
  } = props;
	return (
    <Sidebar
      as={Segment}
      animation="overlay"
      icon="labeled"
      inverted
      direction={"top"}
      visible={userMenuShown}
      width="thin"
      color="teal"
    >
      <Menu>
        <Menu.Item as="a" position="right">
			<Icon name="home" onClick={() => setPage("home")}/>
        </Menu.Item>
        <Menu.Item as="a" onClick={() => setPage("preferences")}>
          <Icon name="cog" />
        </Menu.Item>
        <Menu.Item as="a">
			<Icon name="heart" onClick={ () => setPage("favourites")}/>
        </Menu.Item>
        <Menu.Item as="a" onClick={showLogOut}>
          <Icon name="log out" />
        </Menu.Item>
      </Menu>
    </Sidebar>
  );
	};

export default UserMenu;
