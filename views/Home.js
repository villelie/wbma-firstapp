import React from 'react';
import {View} from 'react-native';
import List from './components/List';

const Home = () => {
    return (
        <View style={styles.container}>
            <List></List>
        </View>
    );
};

export default Home;