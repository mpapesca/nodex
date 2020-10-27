import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, TopNavigation } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <Layout style={styles.container}>
            <SafeAreaView>
                <TopNavigation
                    alignment='center'
                    title='Info'
                />
                <Text>
                    HomeScreen
                </Text>
            </SafeAreaView>
        </Layout>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomeScreen;