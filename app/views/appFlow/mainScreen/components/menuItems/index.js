import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../../style';
import ItemComponent from '../../../../../components/itemComponent';

const MenuItems = ({ title }) => {
    return (
        <View style={styles.itemsViewRows}>
            {title.map(({ text }) => {
                return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <ItemComponent text={text} count="0%" />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
export default MenuItems