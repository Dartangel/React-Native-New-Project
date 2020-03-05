import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { Picker } from 'react-native-wheel-pick';
import { ROUTERS, titles } from '../../../../services/constants';
import NextButton from '../../../../components/nextButton';
import Header from '../../../../components/header';
import { itemList } from '../../../../../__mocks__/temp';

export default function PickStrength({ navigation }) {

    const [selectedItem, setItem] = useState('0-5');

    const goToNextActivity = () => {
        navigation.navigate(ROUTERS.StrapDuration);
    };

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <Header header={titles.STRENGTH} subHeader={titles.REGISTRATION_SUB_HEADER} />
            <View style={styles.set}>
                <Picker
                    style={styles.pickerStyle}
                    pickerData={itemList}
                    onValueChange={setItem}
                    itemSpace={25}
                >
                </Picker>
                <NextButton onPress={goToNextActivity} title={titles.NEXT_BUTTON} />
            </View>
        </ImageBackground >
    );
} 