import React from "react";
import { Segment } from "semantic-ui-react";
import Diet from '../Components/Diet'
import Allergies from '../Components/Allergies'

const PreferencesContainer = ({ user }) => {

    return (
      <Segment>
        <h2>Update Your Dietary Requirements</h2>
        {/* <Diet
          diet={diet}
          // addDietToState={this.addDietToState}
          // clearOptionsState={this.clearOptionsState}
        /> */}
        <h2>Update Your Allergies </h2>
        {/* <Allergies
          allergies={allergies}
          // addAllergiesToState={this.addAllergiesToState}
          // clearOptionsState={this.clearOptionsState}
        /> */}
      </Segment>
    );
};

export default PreferencesContainer
