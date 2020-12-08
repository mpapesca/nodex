import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, TopNavigation, Input, List, ListItem, Divider } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NpmApiClient } from '../apis/NpmApiClient';
import PackageListItem from '../components/PackageListItem';

const HomeScreen = () => {

    const [searchResults, setSearchResults] = useState([]);

    // const packageList = packages.map(p => <Text>{p.}</Text>)
    const search = async (searchText) => {

        const apiClient = new NpmApiClient();
        const searchResponse = await apiClient.search(searchText);
        setSearchResults(searchResponse);

    };

    const renderItem = ({ item }) => (
        <PackageListItem nodePackage={item.package} score={item.score} searchScore={item.searchScore} />
    );

    return (
        <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
                <TopNavigation
                    alignment='center'
                    title='Home'
                />
                <Input
                    placeholder='Search....'
                    onChangeText={(val) => search(val)}
                />
                <List
                    style={styles.container}
                    data={searchResults}
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

export default HomeScreen;