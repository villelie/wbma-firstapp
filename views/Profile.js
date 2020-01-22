import React from 'react';
import {View, Text} from 'react-native';

const Profile = (props) => {
    const signOutAsync = async () => {
        await AsyncStorage.clear();
        props.navigation.navigate('Auth');
    };
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button title="Logout!" onPress={signOutAsync} />
        </View>
    );
};

export default Profile;