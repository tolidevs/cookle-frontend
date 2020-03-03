import React, { Component } from 'react';
import Checkbox from '../Containers/Checkbox'

class Allergies extends Component {

    state = {
        dairy: null,
        egg: null,
        gluten: null,
        grain: null,
        peanut: null,
        seafood: null,
        sesame: null,
        shellfish: null,
        soy: null,
        sulfite: null,
        nut: null,
        wheat: null
    }

    setAllergy = (name) => {
        !this.state.name ? this.setState({ name }) : this.setState({ name: null })
    }

    renderAllergies = () => {
        const allergies = Object.keys(this.state)
        return allergies.map(allergy =>
            <div>< Checkbox
                name={allergy}
                checked={this.state.allergies}
                onClick={e => this.setAllergy(e.target.name)} />
            </div>)
        }
    
    render() {
        const { clearOptionsState } = this.props
        console.log("render")
        return (
            <div className="optionsDiv">
                {this.renderAllergies()}
                <button onClick={clearOptionsState}>Done</button>
            </div>
        );
    }
}

export default Allergies;