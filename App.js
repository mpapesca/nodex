import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawer from './src/navigators/RootDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <RootDrawer />
    </NavigationContainer>
  );
};

export default App;
