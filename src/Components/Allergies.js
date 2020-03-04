import React, { Component } from 'react';
// import Checkbox from '../Containers/Checkbox'
import CheckboxSUI from '../Containers/CheckboxSUI'
import { Button } from "semantic-ui-react";

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
    !this.state[name] ? this.setState({ [name]: name }) : this.setState({ [name]: null })
    }

    renderAllergies = () => {
        const allergies = Object.keys(this.state)
        return allergies.map(allergy => (
          <div>
            <CheckboxSUI
              name={allergy}
              select={this.setAllergy}
            />
          </div>
        ));
    }
  
    createAllergiesArray = () => {
      const allergiesArray = Object.values(this.state)
      this.props.clearOptionsState()
      this.props.addAllergiesToState(allergiesArray.filter( allergy => allergy))
    }
    
    render() {
        // const { clearOptionsState } = this.props
        return (
          <div className="optionsDiv">
            <h3>Select allergies</h3>
            {this.renderAllergies()}
            <Button
              size="tiny"
              compact
              basic
              color="teal"
              onClick={
                this.createAllergiesArray
              }
            >
              Done
            </Button>
          </div>
        );
    }
}

export default Allergies;