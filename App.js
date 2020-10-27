import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import RootDrawer from './src/navigators/RootDrawer';
import { useColorScheme } from 'react-native';

const App = () => {

  const colorScheme = useColorScheme();
  const theme = colorScheme == 'light' ? eva.light : eva.dark;

  return (
    <ApplicationProvider {...eva} theme={theme}>
      <NavigationContainer>
          <RootDrawer />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
