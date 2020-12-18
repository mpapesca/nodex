import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, TopNavigation, Input, List, Divider, Spinner } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NpmApiClient } from '../apis/NpmApiClient';
import PackageListItem from '../components/PackageListItem';

const HomeScreen = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    // const packageList = packages.map(p => <Text>{p.}</Text>)
    const search = async () => {
        console.log({ searchText });

        setIsSearching(true);
        const apiClient = new NpmApiClient();
        const searchResponse = await apiClient.search(searchText);
        setSearchResults(searchResponse);
        setIsSearching(false);

    };

    const navToPackage = async (nodePackage) => {
        const apiClient = new NpmApiClient();
        console.log({ name: nodePackage.name });
        const fullPackage = await apiClient.getPackage(nodePackage.name);
        console.log({ fullPackage });
        navigation.push("Package", { nodePackage, fullPackage });
    };

    const renderItem = ({ item }) => (
        <PackageListItem nodePackage={item.package} score={item.score} searchScore={item.searchScore} onPress={navToPackage} />
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
                    onChangeText={(val) => setSearchText(val)}
                    onSubmitEditing={(val) => search(val)}
                    blurOnSubmit={true}
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={searchText}
                    clearButtonMode={'always'}
                    style={{ marginHorizontal: 8 }}
                />
                {isSearching
                    ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Spinner size='giant' /></View>
                    : <List
                        style={styles.container}
                        data={searchResults}
                        renderItem={renderItem}
                        ItemSeparatorComponent={Divider}
                    />
                }
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