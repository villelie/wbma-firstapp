import {useState} from 'react';
import {fetchGET, fetchPOST} from './APIHooks';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const useUploadForm = () => {
    const [inputs, setInputs] = useState({});
    const handleTitleChange = (text) => {
        setInputs((inputs) =>
            ({
                ...inputs,
                title: text,
            }));
    };

    const handleDescriptionChange = (text) => {
        setInputs((inputs) =>
            ({
                ...inputs,
                description: text,
            }));
    };
    return {
        handleTitleChange,
        handleDescriptionChange,
        inputs,
    };
};

export default useUploadForm;

