import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Button from '../components/Button';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
    navigation,
}: RootTabScreenProps<'TabOne'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Capture Photos</Text>
            <Button
                title="Capture Photos"
                onPress={() => console.log('Take photos in intervals')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
