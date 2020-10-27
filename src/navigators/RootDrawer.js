import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InfoScreen from '../screens/InfoScreen';
import HomeStack from './HomeStack';

const RootDrawer = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeStack" component={HomeStack} />
            <Drawer.Screen name="Info" component={InfoScreen} />
        </Drawer.Navigator>
    );
};

export default RootDrawer;