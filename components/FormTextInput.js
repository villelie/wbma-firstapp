import React from 'react';
import {Input, Item, Content, Badge} from 'native-base';
import PropTypes from 'prop-types';


const FormTextInput = (props) => {
    const {success, error, ...otherProps} = props;
    return (
        <Content>
            <Item success={success} error={error}>
                <Input
                    {...otherProps}
                />
            </Item>
            {error && <Badge><Text>{error}</Text></Badge>}
        </Content>
    );
};

FormTextInput.propTypes = {
    success: PropTypes.bool,
    error: PropTypes.bool,
};

export default FormTextInput;