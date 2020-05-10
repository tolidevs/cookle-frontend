import React from 'react';
import {Icon} from 'semantic-ui-react'

const SaveIcon = ({ recipe, savedRecipes, saveRecipe, unSaveRecipe}) => {

    const saved = !!savedRecipes.find(r => r.id === recipe.id)
    
    const renderIcon = () => {
        if (saved) {
            return (
                <Icon
                    name="heart"
                    onClick={() => unSaveRecipe(recipe.id)}
                />
            )
        } else {
            return (
                <Icon
                    name="heart outline"
                    onClick={() => saveRecipe(recipe.id)}
                />
            )
        }
    }

    return ( renderIcon() )
}

export default SaveIcon