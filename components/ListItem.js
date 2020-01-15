import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = (props) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image
                style={styles.image}
                source={{uri: mediaUrl + props.singleMedia.thumbnails.w160}}
            />
            <View style={styles.text}>
                <Text style={styles.title}>{props.singleMedia.title}</Text>
                <Text>{props.singleMedia.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

ListItem.propTypes = {
    singleMedia: PropTypes.object,
};

export default ListItem;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#999',
        margin: 5,
        borderRadius: 15,

    },
    image: {
        flex: 1,
        minHeight: 160,
        margin: 5,
        borderRadius: 15,
    },
    text: {
        flex: 2,
        margin: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.4em',
    },
});
