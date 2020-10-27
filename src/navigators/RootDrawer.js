import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';

const RootDrawer = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRoute="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Info" component={InfoScreen} />
        </Drawer.Navigator>
    );
};

export default RootDrawer;