import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, Layout, Text, IndexPath } from '@ui-kitten/components';
import HomeStack from './HomeStack';
import InfoStack from './InfoStack';
import { SafeAreaView } from 'react-native';

const RootDrawer = () => {

    const { Navigator, Screen } = createDrawerNavigator();

    return (
        <Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Screen name="Home" component={HomeStack} />
            <Screen name="Info" component={InfoStack} />
        </Navigator>
    );
};

const DrawerContent = ({ navigation, state }) => {
    
    return (
        <Drawer selectedIndex={new IndexPath(state.index)} onSelect={index => navigation.navigate(state.routeNames[index.row])}>
            <SafeAreaView>
                <DrawerItem title='Home' />
                <DrawerItem title='Info' />
            </SafeAreaView>
        </Drawer>
    )
};

export default RootDrawer;