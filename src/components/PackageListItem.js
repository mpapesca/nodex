import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Text } from '@ui-kitten/components';
import gradient from 'gradient-color';

const PackageListItem = ({ nodePackage, score, searchScore }) => {

    // console.log({ nodePackage })
    console.log({ score });

    const title = evaProps => (
        <Text {...evaProps} key={nodePackage.name} style={styles.packageTitle}>
            {nodePackage.name}
        </Text>
    );

    const colors = gradient([
        '#e74c3c',
        '#f1c40f',
        '#27ae60'
    ], 10);

    const scores = evaProps => (
        <View {...evaProps} style={styles.scoresContainer}>
            <Text style={{ ...styles.score, color: colors[Math.floor(score.detail.maintenance * 10)] }}>Maintenance: {Math.floor(score.detail.maintenance * 10)}/10</Text>
            <Text style={{ ...styles.score, color: colors[Math.floor(score.detail.popularity * 10)] }}>Popularity: {Math.floor(score.detail.popularity * 10)}/10</Text>
            <Text style={{ ...styles.score, color: colors[Math.floor(score.detail.quality * 10)] }}>Quality: {Math.floor(score.detail.quality * 10)}/10</Text>
        </View>
    );


    return <ListItem
        title={evaProps => title(evaProps)}
        description={evaProps => scores(evaProps)}
        key={nodePackage.name}
    />;

};

const styles = StyleSheet.create({
    packageTitle: {
        fontSize: 24,
        marginBottom: 8
    },
    scoresContainer: {
        flex: 1
    },
    score: {
        width: '33.3%'
    }
});

export default PackageListItem;