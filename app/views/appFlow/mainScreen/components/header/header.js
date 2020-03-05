import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../style';
import IconComponent from '../../../../../components/iconComponent/index';

const Header = ({ header }) => {
    return (
        <View style={styles.subHeaderRows}>
            <View style={styles.subHeaderIcon}>
                <IconComponent name={'flag-variant'} />
            </View>
            <View style={styles.subHeaderTextView}>
                <Text style={styles.subHeaderTitle}>{header}</Text>
            </View>
            <View style={styles.subHeaderCountView}>
                <Text style={styles.subHeaderCount}>0/7</Text>
            </View>
        </View>
    );
}
export default Header