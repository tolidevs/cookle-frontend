import React, { Component } from "react";
import { Slider } from "react-semantic-ui-range";
import "semantic-ui-css/semantic.min.css";
import { Button, Label } from "semantic-ui-react";
// import styled from "styled-components";

class Calories extends Component {
    state = {
        valueSelected: this.props.calories
    };

    addCalories = () => {
        this.props.clearOptionsState()
        const calories = this.state.valueSelected;
        console.log(calories)
        this.props.addCaloriesToState(calories)
    }

    render() {
        // const { clearOptionsState } = this.props;
        // will need an if else if value is 0 don't return a value
        return (
            <div>
                <h3>Max calories per serving</h3>
                <p>
                <Slider
                    color="teal"
                    inverted={false}
                    settings={{
                    start: this.state.valueSelected,
                    min: 0,
                    max: 2000,
                    step: 100,
                    onChange: value => {
                        this.setState({
                        valueSelected: value
                        });
                    }
                    }}
                />
                </p>
                <Label color="teal">{this.state.valueSelected} calories</Label>
                <Button
                size="tiny"
                compact
                basic
                color="teal"
                onClick={this.addCalories}
                >
                Set Max Cals
                </Button>
            </div>
        );
    }
}

export default Calories;
