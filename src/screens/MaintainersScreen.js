import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, TopNavigation, Input, List, ListItem, Divider } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NpmApiClient } from '../apis/NpmApiClient';
import PackageListItem from '../components/PackageListItem';
import ContactCard from '../components/ContactCard';

const MaintainersScreen = ({ route: { params: { contacts } } }) => {

    console.log()

    const renderItem = ({ item }) => (
        <ContactCard email={item.email} name={item.username} />
    );

    return (
        <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
                <TopNavigation
                    alignment='center'
                    title='Maintainers'
                />

                <List
                    style={styles.container}
                    data={contacts}
                    renderItem={renderItem}
                    ItemSeparatorComponent={Divider}
                />
            </SafeAreaView>
        </Layout>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    packageTitle: {
        fontSize: 24
    }
});

export default MaintainersScreen;