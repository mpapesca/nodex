import React, { useEffect, useState } from 'react';
import { StyleSheet, View, useColorScheme, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Layout, Text, TopNavigation, Icon, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import Markdown from 'react-native-markdown-package';
import ContactCard from '../components/ContactCard';


const PackageScreen = ({ route: { params: { nodePackage, fullPackage } }, navigation }) => {

    // console.log({ nodePackage });

    const colorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(colorScheme == 'dark');

    useEffect(() => {
        setIsDarkMode(colorScheme == 'dark');
    }, [colorScheme]);

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

    const readme = fullPackage.readme ?? nodePackage.readme;

    return (
        <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
                <TopNavigation
                    alignment='center'
                    title={nodePackage.name}
                />
                <ScrollView>
                <ContactCard title='Publisher' email={nodePackage.publisher.email} name={nodePackage.publisher.username} />
                <Button style={{ margin: 8 }} onPress={() => navigation.push('Maintainers', { contacts: nodePackage.maintainers })}>Maintainers</Button>
                <View style={styles.linkButtonsContainer}>
                    {homeButton}
                    {repoButton}
                    {npmButton}
                    {bugsButton}
                </View>
                    <View style={styles.readmeContainer}>
                        <Markdown onLink={(url) => Linking.openURL(url)} >
                            {readme}
                        </Markdown>
                    </View>
                </ScrollView>
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
    profileImage: {
        width: 64,
        height: 64,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 32,
        margin: 16
    },
    profileImageLight: {
        borderColor: 'black'
    },
    readmeContainer: {
        // flex: 1
        backgroundColor: 'white',
        margin: 8,
        padding: 4
    }
});

const markdownStyle = {
    singleLineMd: {
        text: {
            color: 'blue',
            textAlign: "right"
        },
        view: {
            alignSelf: 'stretch',
        }
    },
    collectiveMd: {
        heading1: {
            color: 'white'
        },
        heading2: {
            color: 'white',
            textAlign: "left"
        },
        strong: {
            // color: 'blue'
            fontWeight: 'bold'
        },
        em: {
            color: 'cyan'
        },
        text: {
            color: 'white',
        },
        blockQuoteText: {
            color: 'grey'
        },
        blockQuoteSection: {
            flexDirection: 'row',
        },
        blockQuoteSectionBar: {
            width: 3,
            height: null,
            backgroundColor: '#DDDDDD',
            marginRight: 15,
        },
        codeBlock: {
            fontFamily: 'Courier',
            fontWeight: '500',
            backgroundColor: '#DDDDDD',
        },
        tableHeader: {
            backgroundColor: 'grey',
        },
    }
};

export default PackageScreen;