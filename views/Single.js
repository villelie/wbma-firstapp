import React from 'react';
import {Dimensions} from 'react-native';
import AsyncImage from '../components/AsyncImage';
import {Container, Content, Card, CardItem, Text, Body} from 'native-base';
import PropTypes from 'prop-types';

const deviceHeight = Dimensions.get('window').height;
const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = (props) => {
    const {navigation} = props;
    const file = navigation.state.params.file;
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>{file.title}</Text>
                            <Text note>by {file.user_id}</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                        <AsyncImage
                            style={{
                                width: '100%',
                                height: deviceHeight / 2,
                            }}
                            spinnerColor='#777'
                            source={{uri: mediaURL + file.filename}}
                        />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{file.description}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

Single.propTypes = {
    navigation: PropTypes.object,
    file: PropTypes.object,
};

export default Single;
