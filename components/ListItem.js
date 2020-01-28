import React from 'react';
import PropTypes from 'prop-types';
import {ListItem as BaseListItem, Thumbnail, Text, Left, Body, Right, Button} from 'native-base';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = (props) => {
    return (
        <BaseListItem thumbnail>
            <Left>
                <Thumbnail square source={{uri: mediaUrl + props.singleMedia.thumbnails.w160}} />
            </Left>
            <Body>
                <Text>{props.singleMedia.title}</Text>
                <Text note numberOfLines={1}>{props.singleMedia.description}</Text>
            </Body>
            <Right>
                <Button transparent
                    onPress={
                        () => {
                            props.navigation.push('Single', {file: props.singleMedia});
                        }
                    }>
                    <Text>View</Text>
                </Button>
            </Right>
        </BaseListItem>
    );
}

ListItem.propTypes = {
    singleMedia: PropTypes.object,
};

export default ListItem;