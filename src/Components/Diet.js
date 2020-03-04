import React, { Component } from 'react';
// import Checkbox from '../Containers/Checkbox'
import CheckboxSUI from "../Containers/CheckboxSUI";
import { Button } from "semantic-ui-react";


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
            <div>< CheckboxSUI
                name={diet}
                checked={this.state.diet}
                onClick={e => this.setDiet(e.target.name)} />
            </div>)
    }

    render() {
        const { clearOptionsState } = this.props
        return (
          <div className="optionsDiv">
            <h3>Select diet</h3>
            {this.renderDiets()}
            <Button
              size="tiny"
              compact
              basic
              color="teal"
              onClick={clearOptionsState}
            >
              Done
            </Button>
          </div>
        );
    }
}
 
export default Diet;