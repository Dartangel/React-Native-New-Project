import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../../../../../services/constants';
import titles from '../../../../../../../localization/localization';

const InputValue = ({ header }) => {
    return (
        <View style={styles.subContainer}>
            <Text style={styles.header}>{header}</Text>
            <View style={styles.inputView}>
                <TextInput placeholder={header} style={styles.input} underlineColor={colors.grey} />
                <TouchableOpacity style={styles.button}>
                    <Text >{titles.KG}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>{titles.LB}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default InputValue