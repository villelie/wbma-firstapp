import React from 'react';
import {MediaProvider} from './contexts/MediaContext';
import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <MediaProvider>
      <Navigator />
    </MediaProvider>
  );
};

export default App;