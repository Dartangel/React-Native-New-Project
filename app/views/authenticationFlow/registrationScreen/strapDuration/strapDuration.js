import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { Picker } from 'react-native-wheel-pick';
import { ROUTERS, titles } from '../../../../services/constants';
import NextButton from '../../../../components/nextButton';
import Header from '../../../../components/header';

export default function StrapDuration({ navigation }) {

    const itemList = ['Более 120c', '0-30c', '30-60c', '60-120c'];
    const [selectedItem, setItem] = useState('0-30')

    const goToNextActivity = () => {
        navigation.navigate(ROUTERS.KneesProblems);
    };

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <Header header={titles.STRAP_DURATION} subHeader={titles.REGISTRATION_SUB_HEADER} />
            <View style={styles.set}>
                <Picker
                    style={styles.pickerStyle}
                    selectedValue={selectedItem}
                    pickerData={itemList}
                    onValueChange={setItem}
                    itemSpace={50}>
                </Picker>
                <NextButton onPress={goToNextActivity} title={titles.NEXT_BUTTON} />
            </View>
        </ImageBackground >
    );
};