import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InfoScreen from '../screens/InfoScreen';

const InfoStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Info" component={InfoScreen} />
        </Stack.Navigator>
    );
};

export default InfoStack;