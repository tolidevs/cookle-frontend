import React, { Component } from "react";
import { Slider } from "react-semantic-ui-range";
import "semantic-ui-css/semantic.min.css";

class CookTime extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <Segment>
            <h1>Callback!</h1>
            <p>
              <Slider
                color="red"
                inverted={false}
                settings={{
                  start: this.state.value1,
                  min: 0,
                  max: 10,
                  step: 1,
                  onChange: value => {
                    this.setState({
                      value1: value
                    });
                  }
                }}
              />
            </p>
            <Label color="red">{this.state.value1}</Label>
          </Segment>
        );
    }
}
 
export default CookTime;
