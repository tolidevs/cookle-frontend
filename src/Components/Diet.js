import React, { Component } from 'react';
// import Checkbox from '../Containers/Checkbox'
import CheckboxSUI from "../Containers/CheckboxSUI";
import { Button } from "semantic-ui-react";


class Diet extends Component {
        
    constructor(props) {
        super(props);
        const { diet } = props
        this.state = {
                // if passed in diet array is not null, and if diet array includes element, set element state to element name or otherwise null
                // glutenfree: diet && diet.includes("glutenfree") && "glutenfree",
                vegan: diet && diet.includes("vegan") && "vegan",
                vegetarian: diet && diet.includes("vegetarian") && "vegetarian",
                pescatarian: diet && diet.includes("pescatarian") && "pescatarian",
                ketogenic: diet && diet.includes("ketogenic") && "ketogenic",
                paleo: diet && diet.includes("paleo") && "paleo"
            };
    }

    setDiet = name => {
        !this.state[name]
        ? this.setState({ [name]: name })
        : this.setState({ [name]: false });
    };

    renderDiets = () => {
        const diet = Object.keys(this.state);
        return diet.map(diet => (
            <div>
                <CheckboxSUI
                    checked={this.state[diet]}
                    name={diet}
                    select={this.setDiet} />
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