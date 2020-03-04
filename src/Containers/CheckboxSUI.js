import React from "react";
import { Checkbox } from "semantic-ui-react";

const CheckboxSUI = ({ name, select, checked}) => {
    return (
        < Checkbox
            toggle
            checked={!!checked}
            onClick={e =>select(e.target.innerText)}
            label={name}
        />
    );
};


export default CheckboxSUI