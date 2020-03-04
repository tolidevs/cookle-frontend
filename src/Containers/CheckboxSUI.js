import React from "react";
import { Checkbox } from "semantic-ui-react";

const CheckboxSUI = ({ name }) => {
    return (
        < Checkbox toggle label={name} />
    );
};


export default CheckboxSUI