import React from 'react';
import {Input, Item} from 'native-base';
import PropTypes from 'prop-types';


const FormTextInput = (props) => {
    const {success, error, ...otherProps} = props;
    return (
        <Item success={success} error={error}>
            <Input
                {...otherProps}
            />
        </Item>
    );
};

FormTextInput.propTypes = {
    success: PropTypes.bool,
    error: PropTypes.bool,
};

export default FormTextInput;