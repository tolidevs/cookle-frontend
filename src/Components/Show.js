import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import ShowData from '../Components/ShowData';

class Show extends React.Component {
	render() {
		const { recipe } = this.props
		console.log(recipe)
		return (
		<Container>
			<div>
				<ShowData recipe={recipe} />
			</div>
		</Container>
    );
	}
}
export default Show;
