import React from 'react';
import { View } from 'react-native';
import styles from './style';
import titles from '../../../../../services/constants';
import InputValue from './components/inputValue';
import Button from './components/buttons';

const Weight = (onPress) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <InputValue header={titles.WEIGHT} />
                <InputValue header={titles.HEIGHT} />
                <View style={styles.buttonsView}>
                    <Button onPress={onPress} title={titles.CANSEL} />
                    <Button onPress={onPress} title={titles.SAVE} />
                </View>
            </View>
        </View>
    );
}
export default Weight