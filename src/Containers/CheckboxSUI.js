import React from "react";
import { Checkbox } from "semantic-ui-react";

const CheckboxSUI = ({ name, select}) => {
    return (
        < Checkbox
            toggle
            onClick={e =>select(e.target.innerText)}
            label={name}
        />
    );
};


export default CheckboxSUI