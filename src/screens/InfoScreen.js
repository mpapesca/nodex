import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const InfoScreen = () => {
    return (
        <Layout style={styles.container}>
            <SafeAreaView>
                <Text>
                    InfoScreen
                </Text>
            </SafeAreaView>
        </Layout >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default InfoScreen;