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
    };

    setDiet = (name) => {
        !this.state[name]
        ? this.setState({ [name]: name })
        : this.setState({ [name]: null });
    };

    renderDiets = () => {
        const diet = Object.keys(this.state);
        return diet.map(diet => (
        <div>
            <CheckboxSUI name={diet} select={this.setDiet} />
        </div>
        ));
    };

    createDietArray = () => {
        const dietArray = Object.values(this.state);
        this.props.clearOptionsState();
        this.props.addDietToState(dietArray.filter(diet => diet));
    };

    render() {
        return (
        <div className="optionsDiv">
            <h3>Select diet</h3>
            {this.renderDiets()}
            <Button
            size="tiny"
            compact
            basic
            color="teal"
            onClick={this.createDietArray}
            >
            Done
            </Button>
        </div>
        );
    }
}
 
export default Diet;