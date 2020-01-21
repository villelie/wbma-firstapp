import React from 'react';
import {View, Image, Text} from 'react-native';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContext';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <MediaProvider>
      <Image
        style={{width: '100%', height: 480, }}
        source={{uri: 'https://picsum.photos/800/480'}}
      />
      <Text
        style={{
          position: 'absolute',
          left: 10,
          top: 10,
          padding: 20,
          backgroundColor: '#999',
          fontWeight: 'bold',
          fontSize: '1.4em',
          color: 'orange',
          borderRadius: 15,
          boxShadow: '2px 2px 5px black',
        }}>Tons of pictures.</Text>
      <View>
        <List />
      </View>
    </MediaProvider>
  );
};

export default App;