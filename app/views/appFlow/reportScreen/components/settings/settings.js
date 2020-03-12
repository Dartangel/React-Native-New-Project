import React, { useState } from 'react';
import styles from '../../style'
import { View, Text, TouchableOpacity, Modal, KeyboardAvoidingView } from 'react-native';
import Weight from '../setWeight';

const Settings = ({ title, button }) => {
    const [visible, changeVisible] = useState(false)
    return (
        <View style={styles.itemsRow}>
            <View style={styles.titleView}>
                <View style={styles.iconView}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="-250" keyboardShouldPersistTaps={'always'} >
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={visible}
                    onRequestClose={() => {
                        changeVisible(false);
                    }}>
                    <Weight onPress={changeVisible} />
                </Modal>
            </KeyboardAvoidingView>
            <View style={styles.buttonView}>
                <TouchableOpacity visible={true} onPress={() => changeVisible(true)}
                    style={styles.timeText}>
                    <Text style={styles.timeText}>{button}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Settings