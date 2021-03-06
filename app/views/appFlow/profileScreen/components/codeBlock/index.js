import React from 'react';
import styles from '../../style';
import { View, Text } from 'react-native';
import Items from '../items/index';

const CodeBlock = ({ list, header, navigation }) => {
    return (
        <View style={styles.warmupContainer}>
            <View style={styles.warmupHeader}>
                <Text style={styles.headerText}>{header}</Text>
            </View>
            {list.map(({ header, time, icon, screen }) => {
                return <Items header={header} time={time} icon={icon} screen={screen} navigation={navigation} />
            })}
        </View>
    )
}
export default CodeBlock;