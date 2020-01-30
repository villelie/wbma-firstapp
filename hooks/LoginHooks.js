import {useState} from 'react';
import validate from 'validate.js';

const useSignUpForm = () => {
    const [inputs, setInputs] = useState({});
    const handleUsernameChange = (text) => {
        setInputs((inputs) =>
            ({
                ...inputs,
                username: text,
            }));
    };
    const handleEmailChange = (text) => {
        setInputs((inputs) =>
            ({
                ...inputs,
                email: text,
            }));
    };
    const handleFullnameChange = (text) => {
        setInputs((inputs) =>
            ({
                ...inputs,
                full_name: text,
            }));
    };
    const handlePasswordChange = (text) => {
        setInputs((inputs) =>
            ({
                ...inputs,
                password: text,
            }));
    };
    const validateUser = (param) => {
        const valResult = validate({param: inputs.param}, constraints);
        let valid = undefined;
        if (valResult) valid = valResult.param[0];
        setErrors((errors) => ({
            ...errors,
            username: valid,
        }));
    };
    return {
        handleUsernameChange,
        handleEmailChange,
        handleFullnameChange,
        handlePasswordChange,
        //validateUser,
        inputs,
        //errors,
        //setErrors,
    };
};

export default useSignUpForm;