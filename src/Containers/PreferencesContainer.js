import React from "react";
import { Segment } from "semantic-ui-react";
import Diet from '../Components/Diet'
import Allergies from '../Components/Allergies'

class PreferencesContainer extends React.Component {

  state = {
    diet: [],
    allergies: []
  }
  
  // getPreferences = () => {
  //   fetch(`http://localhost:3000/user_preferences`)
  //     .then(res => res.json())
  //     .then(preferences =>
  //       this.getUserPreferences(preferences)
  //   )
  //     .then(console.log)
  //     .catch(console.log);
  // }

  // getUserPreferences = (preferences) => {
  //   const userId = this.props.currentUser
  //   console.log(preferences)
  //   const userPrefs = preferences.filter( preference =>  preference.user_id === userId )
  //   return userPrefs.map(preference => this.getPreferenceTypeAndName(preference))
  // }

  mapUserPrefs = () => {
    const userPrefs = this.props.userPrefs
    return userPrefs.map(preference => this.getPreferenceTypeAndName(preference))
  }

  getPreferenceTypeAndName = (userPreference) => {
    const prefID = userPreference.preference_id
    fetch(`http://localhost:3000/preferences/${prefID}`)
      .then(res => res.json())
      .then(preference => this.setPreferenceTypeAndName(preference))
      .catch(console.log)
    
  }

  setPreferenceTypeAndName = (preference) => {
    const prefType = preference.allergy_or_diet
    const name = preference.name
    prefType === "diet" ? this.setState({
      diet: [this.state.diet].push(name)
    }) : this.setState({
      allergies: [this.state.allergies].push(name)
    })
      
  }

  // need to iterate through each preference and return type & name, then set state for each one
  // then need to render the checkboxes with the selected preferences already selected
  // then need to create crud actions to edit user's preferences
  
  render() {
    const { allergies, diet } = this.state
    console.log(this.mapPreferences())
    return (
      <Segment>
        <h2>Update Your Dietary Requirements</h2>
        <Diet
          diet={diet}
          // addDietToState={this.addDietToState}
          // clearOptionsState={this.clearOptionsState}
        />
        <h2>Update Your Allergies </h2>
        <Allergies
          allergies={allergies}
          // addAllergiesToState={this.addAllergiesToState}
          // clearOptionsState={this.clearOptionsState}
        />
      </Segment>
    );
  };
}

export default PreferencesContainer
