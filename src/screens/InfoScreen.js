import { Layout, Text, TopNavigation } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const InfoScreen = () => {
    return (
        <Layout style={styles.container}>
            <SafeAreaView>
                <TopNavigation
                    alignment='center'
                    title='Info'
                />

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