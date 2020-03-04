import React, { Component } from "react";
import { Slider } from "react-semantic-ui-range";
import "semantic-ui-css/semantic.min.css";
import { Button, Label } from "semantic-ui-react";
// import styled from "styled-components";

class CookTime extends Component {
    state = {
        valueSelected: this.props.cookTime
    };

    addCookTime  = () => {
        this.props.clearOptionsState();
        const cookTime = this.state.valueSelected;
        console.log(cookTime);
        this.props.addCookTimeToState(cookTime);
    };

    render() {
        return (
        <div>
            <h3>Max prep time in hours</h3>
            <p>
            <Slider
                color="teal"
                inverted={false}
                settings={{
                start: this.state.valueSelected,
                min: 0,
                max: 5,
                step: 0.25,
                onChange: value => {
                    this.setState({
                    valueSelected: value
                    });
                }
                }}
            />
            </p>
            <Label color="teal">{this.state.valueSelected} hours</Label>
            <Button
            size="tiny"
            compact
            basic
            color="teal"
            onClick={this.addCookTime}
            >
            Set Time
            </Button>
        </div>
        );
    }
}
    
export default CookTime
