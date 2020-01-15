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
  flex: {
    backgroundColor: '#999',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
  image: {
    flexGrow: 1,
    minWidth: 160,
    minHeight: 160,
    margin: 5,
  },
  text: {
    flexShrink: 1,
    margin: 5,
  },
});

export default App;