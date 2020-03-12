import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({ title, onPress }) => {
    return (
        <View style={styles.buttonsView}>
            <TouchableOpacity onPress={() => onPress(false)}>
                <Text style={styles.buttonsText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Button