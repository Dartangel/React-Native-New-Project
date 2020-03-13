import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const OwnBtn = ({ title, onClick }) => {
    return (
        <View style={styles.buttonsView}>
            <TouchableOpacity onPress={() => onClick(false)} >
                <Text style={styles.buttonsText}>{title}</Text>
            </TouchableOpacity>
        </View >
    );
}
export default OwnBtn