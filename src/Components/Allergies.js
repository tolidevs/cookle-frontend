import React, { Component } from 'react';
// import Checkbox from '../Containers/Checkbox'
import CheckboxSUI from '../Containers/CheckboxSUI'
import { Button } from "semantic-ui-react";

class Allergies extends Component {
  constructor(props) {
    super(props)
    const { allergies } = props
    this.state = {
      dairy: allergies && allergies.includes("dairy") && "dairy",
      egg: allergies && allergies.includes("egg") && "egg",
      gluten: allergies && allergies.includes("gluten") && "gluten",
      grain: allergies && allergies.includes("grain") && "grain",
      peanut: allergies && allergies.includes("peanut") && "peanut",
      seafood: allergies && allergies.includes("seafood") && "seafood",
      sesame: allergies && allergies.includes("sesame") && "sesame",
      shellfish: allergies && allergies.includes("shellfish") && "shellfish",
      soy: allergies && allergies.includes("soy") && "soy",
      sulfite: allergies && allergies.includes("sulfite") && "sulfite",
      nut: allergies && allergies.includes("nut") && "nut",
      wheat: allergies && allergies.includes("wheat") && "wheat"
    };
  }

  setAllergy = (name) => {
    this.state[name] ? this.setState({ [name]: false }) : this.setState({ [name]: name })
    
    }

    renderAllergies = () => {
        const allergies = Object.keys(this.state)
        return allergies.map(allergy => (
          <div>
            <CheckboxSUI
              checked={this.state[allergy]}
              name={allergy}
              select={allergy => this.setAllergy(allergy)}
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