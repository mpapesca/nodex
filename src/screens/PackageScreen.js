import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, TopNavigation, Input, List, ListItem, Divider } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const PackageScreen = ({ navigation, route: { params: { nodePackage } } }) => {

    console.log({ nodePackage });

    return (
        <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
                <TopNavigation
                    alignment='center'
                    title={nodePackage.name}
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

export default PackageScreen;