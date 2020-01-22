import React, {useState, useEffect} from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';

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
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 40,
        }}>
            <Text style={{fontSize: 24}}>Profile</Text>
            <Text>Id: {user.user_id}</Text>
            <Text>Username: {user.username}</Text>
            <Text>Email: {user.email}</Text>

            <Button title="Logout!" onPress={signOutAsync} />
        </View>
    );
};

Profile.propTypes = {
    singleMedia: PropTypes.object,
};

export default Profile;