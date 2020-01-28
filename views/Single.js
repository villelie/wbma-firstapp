import React from 'react';
import {Image, Dimensions} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body, Header, Title, Left, Button, Icon} from 'native-base';

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
                        <Image
                            style={{height: (Dimensions.get('window').height * 0.5), width: undefined, flex: 1}}
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

export default Single;
