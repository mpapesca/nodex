import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Layout, Text, TopNavigation, Icon, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const PackageScreen = ({ route: { params: { nodePackage } } }) => {

    console.log({ nodePackage });

    let { bugs, homepage, repository, npm } = nodePackage.links;


    const repoButton = repository ? <Button style={styles.button} >
        <FontAwesome5 name='github' size={24} />
    </Button> : null;

    const npmButton = npm ? <Button style={styles.button} >
        <FontAwesome5 name='npm' size={24} />
    </Button> : null;

    const bugsButton = bugs ? <Button style={styles.button} >
        <FontAwesome5 name='bug' size={24} />
    </Button> : null;

    const homeButton = homepage ? <Button style={styles.button} >
        <FontAwesome5 name='home' size={24} />
    </Button> : null;

    // const HomeIcon = (props) => (
    //     <FontAwesome5 name='home' {...props} size={24} />
    // );

    // const BugIcon = (props) => (
    //     <FontAwesome5 name='bug' {...props} size={24} />
    // );

    // const NpmIcon = (props) => (
    //     <FontAwesome5 name='npm' {...props} size={24} />
    // );

    return (
        <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
                <TopNavigation
                    alignment='center'
                    title={nodePackage.name}
                />
                <View style={styles.linkButtonsContainer}>
                    {repoButton}
                    {npmButton}
                    {bugsButton}
                    {homeButton}
                    {/* <Button style={styles.button} >
                        <HomeIcon />
                    </Button>
                    <Button style={styles.button} >
                        <BugIcon />
                    </Button>
                    <Button style={styles.button} >
                        <NpmIcon />
                    </Button> */}
                </View>
            </SafeAreaView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    packageTitle: {
        fontSize: 24
    },
    icon: {
        width: 32,
        height: 32,
    },
    button: {
        flex: 1,
        height: 48,
        margin: 8
    },
    linkButtonsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    linkButtonContainer: {
        flex: 1,
        alignContent: 'center',
        marginHorizontal: 8,
        // marginVertical: 8
    }
});

export default PackageScreen;