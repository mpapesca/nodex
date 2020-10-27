import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, Layout, Text, IndexPath } from '@ui-kitten/components';
import HomeStack from './HomeStack';
import InfoStack from './InfoStack';
import { SafeAreaView, StyleSheet } from 'react-native';

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

    const header = () => (
        <React.Fragment>
            <Text category="h1"></Text>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <Layout style={styles.container}>
                <SafeAreaView>
                    <Text style={styles.title} category="h1">Nodex</Text>
                    <Drawer header={header} selectedIndex={new IndexPath(state.index)} onSelect={index => navigation.navigate(state.routeNames[index.row])}>
                        <DrawerItem title='Home' />
                        <DrawerItem title='Info' />
                    </Drawer>
                </SafeAreaView>
            </Layout>
        </React.Fragment>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        margin: 8
    }
});

export default RootDrawer;