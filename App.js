import React from 'react';
import {StyleSheet, View} from 'react-native';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContext';

const App = () => {
  return (
    <MediaProvider>
      <View style={styles.container}>
        <List />
      </View>
    </MediaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1em',
  },
});

export default App;