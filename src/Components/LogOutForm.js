import React from "react";
import { Segment, Sidebar, Menu, Icon } from "semantic-ui-react";

const LogOutForm = props => {
  const { displayUserMenu, logOutClicked, logOut } = props;
  return (
    <Sidebar
      as={Segment}
      animation="overlay"
      icon="labeled"
      inverted
      onHide={displayUserMenu}
      direction={"top"}
      visible={logOutClicked}
      width="thin"
      color="teal"
    >
          <Menu>
              Log Out?
        <Menu.Item as="a" position="right" onClick={logOut}>
                  <Icon name="log out" />
                  Log Out
        </Menu.Item>
        
      </Menu>
    </Sidebar>
  );
};

export default LogOutForm;
