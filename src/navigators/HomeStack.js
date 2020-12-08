import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PackageScreen from '../screens/PackageScreen';

const HomeStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Package" component={PackageScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default HomeStack;