import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import InfoStack from './InfoStack';

const RootDrawer = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Info" component={InfoStack} />
        </Drawer.Navigator>
    );
};

export default RootDrawer;