import React from 'react';
import { Segment, Sidebar, Menu, Icon } from 'semantic-ui-react';

const UserMenu = props => {
	const { displayUserMenu, userMenuShown } = props;
	return (
		<Sidebar
			as={Segment}
			animation='overlay'
			icon='labeled'
			inverted
			onHide={displayUserMenu}
			direction={'top'}
			visible={userMenuShown}
			width='thin'>
			<Segment>
				<Menu.Item as='a' columns={3}>
					<Icon name='home' />
					Home
				</Menu.Item>
				<Menu.Item as='a'>
					<Icon name='cog' />
					Preferences
				</Menu.Item>
				<Menu.Item as='a'>
					<Icon name='save' />
					Saved Recipes
				</Menu.Item>
			</Segment>
		</Sidebar>
	);
};

export default UserMenu;
