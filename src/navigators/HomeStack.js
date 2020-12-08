import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PackageScreen from '../screens/PackageScreen';
import MaintainersScreen from '../screens/MaintainersScreen';

const HomeStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Package" component={PackageScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Maintainers" component={MaintainersScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default HomeStack;