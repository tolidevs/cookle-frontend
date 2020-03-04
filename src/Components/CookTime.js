import React, { Component } from "react";
import { Slider } from "react-semantic-ui-range";
import "semantic-ui-css/semantic.min.css";
import { Button, Label } from "semantic-ui-react";
// import styled from "styled-components";

class CookTime extends Component {
    state = {
        valueSelected: 0,
    };

    render() {
        const { clearOptionsState } = this.props
        // will need an if else if value is 0 don't return a value
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
                <Button size='tiny' compact basic color="teal" onClick={clearOptionsState}>Set Time</Button>
            </div>
        );
    }
}
    
export default CookTime
