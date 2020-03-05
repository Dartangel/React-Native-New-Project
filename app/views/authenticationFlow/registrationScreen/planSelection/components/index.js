import React from 'react';
import { View } from 'react-native';
import styles from '../styles';
import { titles } from '../../../../../services/constants';
import NextButton from '../../../../../components/nextButton';
import ChoosePlan from '../../../../../components/choosePlan'


export const PlanSettings = (nextScreen, { navigation }) => {

    const goToNextActivity = () => {
        navigation.navigate(nextScreen);
    };
    return (
        <View style={styles.set}>
            <ChoosePlan title={titles.NEWBIE} subTitle={titles.OPTIONS_1} />
            <ChoosePlan title={titles.CONTINUING} subTitle={titles.OPTIONS_2} />
            <ChoosePlan title={titles.ADVANCED} subTitle={titles.OPTIONS_3} />
            <View style={styles.nextButton}>
                <NextButton onPress={goToNextActivity} title={titles.NEXT_BUTTON} />
            </View>
        </View>
    )
}