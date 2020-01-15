import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';

const List = (props) => {
    const [media] = useContext(MediaContext);
    return (
        <FlatList
            data={media}
            renderItem={({item}) => <ListItem singleMedia={item} />}
        />
    );
};

export default List;