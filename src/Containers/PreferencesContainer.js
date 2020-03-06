import React from "react";
import { Segment } from "semantic-ui-react";
import Diet from '../Components/Diet'
import Allergies from '../Components/Allergies'

class PreferencesContainer extends React.Component {
  
  getPreferences = () => {
    fetch(`http://localhost:3000/user_preferences`)
      .then(res => res.json())
      .then(preferences => this.getUserPreferences(preferences))
      .then(console.log)
      .catch(console.log);
  }

  getUserPreferences = (preferences) => {
    const userId = this.props.currentUser
    const userPrefs = preferences.filter( preference =>  preference.user_id === userId )
    console.log(userPrefs)
  }

  // need to iterate through each preference and return type & name, then set state for each one
  // then need to render the checkboxes with the selected preferences already selected
  // then need to create crud actions to edit user's preferences
  
  render() {
    console.log(this.getPreferences())
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
}

export default PreferencesContainer
