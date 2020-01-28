import React, {useState, useEffect} from 'react';
import {Image, Dimensions, AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Content, Card, CardItem, Text, Button, Icon, Body} from 'native-base';

const Profile = (props) => {
    const [user, setUser] = useState({});
    const userToState = async () => {
        const userFromState = await AsyncStorage.getItem('user');
        setUser(JSON.parse(userFromState));
    };
    useEffect(() => {
        userToState();
    }, []);

    const signOutAsync = async () => {
        await AsyncStorage.clear();
        props.navigation.navigate('Auth');
    };
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem>
                        <Icon name='person' />
                        <Body>
                            <Text>{user.username}</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            style={{height: (Dimensions.get('window').height * 0.5), width: undefined, flex: 1}}
                            source={{uri: 'https://users.metropolia.fi/~villelie/web-tekniikat-ja-digitaalinen-media/projekti/img/ppic.jpg'}}
                        />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Id: {user.user_id}</Text>
                            <Text>Full name: {user.full_name}</Text>
                            <Text>Email: {user.email}</Text>
                        </Body>
                    </CardItem>
                    <Button onPress={signOutAsync}>
                        <Text>Sign out</Text>
                    </Button>
                </Card>
            </Content>
        </Container>
    );
};

Profile.propTypes = {
    singleMedia: PropTypes.object,
};

export default Profile;