import {useState, useEffect} from "react";

const apiUrl = 'http://media.mw.metropolia.fi/wbma/';

const getAllMedia = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchUrl = async () => {
        try {
            const response = await fetch(apiUrl + 'media/all');
            const json = await response.json();
            const result = await Promise.all(json.files.map(async (item) => {
                const tnResponse = await fetch(apiUrl + 'media/' + item.file_id);
                return await tnResponse.json();
            }));

            console.log('Hooks: ', result);
            setData(result);
            setLoading(false);
        } catch (e) {
            console.log('Error: ', e);
        }
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return [data, loading];
}
export {getAllMedia};