import React, { Component } from 'react';
import Checkbox from '../Containers/Checkbox'

class Diet extends Component {

    state = {
        glutenfree: null,
        vegan: null,
        vegetarian: null,
        pescatarian: null,
        ketogenic: null,
        paleo: null
    }
    
    setDiet = (name) => {
        !this.state.name ? this.setState({ name }) : this.setState({ name: null })
    }

    renderDiets = () => {
        const diet = Object.keys(this.state)
        return diet.map(diet =>
            <div>< Checkbox
                name={diet}
                checked={this.state.diet}
                onClick={e => this.setDiet(e.target.name)} />
            </div>)
    }

    render() {
        const { clearOptionsState } = this.props
        return (
            <div className="optionsDiv">
                {this.renderDiets()}
                <button onClick={clearOptionsState}>Done</button>
            </div>
        );
    }
}
 
export default Diet;