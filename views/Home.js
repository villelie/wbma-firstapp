import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';
import List from '../components/List';

const Home = (props) => {
    const {navigation} = props;
    return (
        <View>
            <Image
                width={(Dimensions.get('window').width)}
                source={{uri: 'https://picsum.photos/1024/240'}}
            />
            <Text
                style={{
                    position: 'absolute',
                    left: 10,
                    top: 10,
                    padding: 20,
                    backgroundColor: '#999',
                    fontWeight: 'bold',
                    fontSize: 24,
                    color: 'orange',
                    borderRadius: 15,
                }}>Tons of pictures.</Text>
            <List navigation={navigation}></List>
        </View>
    );
};

export default Home;