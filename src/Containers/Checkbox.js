import React from 'react';

const Checkbox = ({ name }) => {

    return (
        <label>
            <input type="checkbox" name={name} />
            <span>{name.toUpperCase()}</span>
        </label>
    )
}

export default Checkbox