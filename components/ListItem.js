import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
    return (
        <TouchableOpacity style={styles.flex}>
            <Image
                style={styles.image}
                source={{uri: props.singleMedia.thumbnails.w160}}
            />
            <View style={styles.text}>
                <Text style={{fontSize: '1.2em', fontWeight: 'bold'}}>{props.singleMedia.title}</Text>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1em',
    },
    flex: {
        backgroundColor: '#999',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
    },
    image: {
        flexGrow: 1,
        minWidth: 160,
        minHeight: 160,
        margin: 5,
    },
    text: {
        flexShrink: 1,
        margin: 5,
    },
});
