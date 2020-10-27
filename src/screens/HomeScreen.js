import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <Layout style={styles.container}>
            <SafeAreaView>
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