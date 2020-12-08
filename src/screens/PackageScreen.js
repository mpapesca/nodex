import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Layout, Text, TopNavigation, Icon, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import { MarkdownView } from 'react-native-markdown-view';
import { Gravatar, GravatarApi } from 'react-native-gravatar';
import ContactCard from '../components/ContactCard';

const PackageScreen = ({ route: { params: { nodePackage } }, navigation }) => {

    console.log({ nodePackage });

    let { bugs, homepage, repository, npm } = nodePackage.links;

    const openLink = async (link) => {
        await WebBrowser.openBrowserAsync(link);
    };

    const repoButton = repository ? <Button style={styles.button} onPress={() => openLink(repository)}>
        <FontAwesome5
            name={repository.includes('github') ? 'github' : repository.includes('gitlab') ? 'gitlab' : 'code'}
            size={24}
        />
    </Button> : null;

    const npmButton = npm ? <Button style={styles.button} onPress={() => openLink(npm)}>
        <FontAwesome5
            name='npm'
            size={24}
        />
    </Button> : null;

    const bugsButton = bugs ? <Button style={styles.button} onPress={() => openLink(bugs)}>
        <FontAwesome5
            name='bug'
            size={24}
        />
    </Button> : null;

    const homeButton = homepage ? <Button style={styles.button} onPress={() => openLink(homepage)}>
        <FontAwesome5
            name='home'
            size={24}
        />
    </Button> : null;

    return (
        <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
                <TopNavigation
                    alignment='center'
                    title={nodePackage.name}
                />
                <ContactCard title='Publisher' email={nodePackage.publisher.email} name={nodePackage.publisher.username} />
                <Button style={{ margin: 8 }} onPress={() => navigation.push('Maintainers', { contacts: nodePackage.maintainers })}>Maintainers</Button>
                <View style={styles.linkButtonsContainer}>
                    {homeButton}
                    {repoButton}
                    {npmButton}
                    {bugsButton}
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
        flexDirection: 'row'
    },
    linkButtonContainer: {
        flex: 1,
        alignContent: 'center',
        marginHorizontal: 8
    },
    roundedProfileImage: {
        width: 64,
        height: 64,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 32,
        margin: 16
    }
});

export default PackageScreen;