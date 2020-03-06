import React from "react";
import { Segment, Sidebar, Menu, Icon } from "semantic-ui-react";

const LogOutForm = props => {
    const { displayUserMenu, logOutClicked, showLogOut, logOut } = props;
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
          <Menu.Item as="a" onClick={logOut} position="right">
            <Icon name="log out" />
            Log Out
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="close" onClick={showLogOut} />
          </Menu.Item>
        </Menu>
      </Sidebar>
    );
    };

export default LogOutForm;
