import React from 'react';
import { View } from 'react-native';
import styles from './style';
import titles from '../../../../../localization/localization';
import InputValue from './components/inputValue';
import OwnBtn from './components/buttons';

const Weight = ({ onClick }) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <InputValue header={titles.WEIGHT} />
                <InputValue header={titles.HEIGHT} />
                <View style={styles.buttonsView}>
                    <OwnBtn onClick={onClick} title={titles.CANSEL} />
                    <OwnBtn onClick={onClick} title={titles.SAVE} />
                </View>
            </View>
        </View>
    );
}
export default Weight