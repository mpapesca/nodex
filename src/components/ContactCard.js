import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Gravatar, GravatarApi } from 'react-native-gravatar';

const ContactCard = ({ title, email, name }) => {
    return (
        <View style={styles.container}>
            {title && <Text category='h4'>{title}</Text>}
            <View style={{ ...styles.row }}>
                <Gravatar
                    options={{
                        email,
                        parameters: { "size": "200", "d": "mm" },
                        secure: true
                    }}
                    style={styles.roundedProfileImage} />
                <View style={styles.textDetails}>
                    <Text category='h5'>{name}</Text>
                    <Text>{email}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    roundedProfileImage: {
        width: 64,
        height: 64,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 32,
        margin: 8
    },
    row: {
        flexDirection: 'row'
    },
    textDetails: {
        justifyContent: 'center'
    }
});

export default ContactCard;