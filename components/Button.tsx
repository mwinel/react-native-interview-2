import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from './Themed';

export default function EditScreenInfo({
    title,
    onPress,
}: {
    title: string;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});
