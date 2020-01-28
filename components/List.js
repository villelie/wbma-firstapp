import React, {useContext} from 'react';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';
import {getAllMedia} from '../hooks/APIhooks';
import {List as BaseList} from 'native-base';

const List = (props) => {
    const [media, setMedia] = useContext(MediaContext);
    const [data, loading] = getAllMedia();
    console.log('List: ', data, loading);
    setMedia(data);
    return (
        <BaseList
            dataArray={media}
            renderRow={
                (item) => <ListItem
                    navigation={props.navigation}
                    singleMedia={item}
                />
            }
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default List;