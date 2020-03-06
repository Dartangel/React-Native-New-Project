import React from 'react';
import styles from '../../style'
import { View, Text, TouchableOpacity } from 'react-native';

const Settings = ({ title, button, navigation, screen }) => {
    return (
        <View style={styles.itemsRow}>
            <View style={styles.titleView}>
                <View style={styles.iconView}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => navigation.navigate(screen)}
                    style={styles.timeText}>
                    <Text style={styles.timeText}>{button}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Settings