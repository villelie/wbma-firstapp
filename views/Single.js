import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';

const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = (props) => {
    const {navigation} = props;
    const file = navigation.state.params.file;
    return (
        <View style={{
            backgroundColor: '#999',
            margin: 5,
            borderRadius: 15,
            height: '100%',
            boxShadow: '2px 2px 5px black',
        }}>
            <Text style={{
                paddingTop: 20,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1.4em',
                color: 'orange',
            }}>
                {file.title}
            </Text>
            <Image
                width={(Dimensions.get('window').width)*0.8}
                style={{
                    margin: 'auto',
                    borderWidth: 2,
                    borderColor: 'orange',
                    borderRadius: 5,
                }}
                source={{uri: mediaURL + file.filename}} />
        </View>
    );
};

export default Single;
