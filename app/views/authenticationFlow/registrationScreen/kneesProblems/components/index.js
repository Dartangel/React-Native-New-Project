import React from 'react';
import { View } from 'react-native';
import styles from '../styles';
import titles from '../../../../../services/constants';
import NextButton from '../../../../../components/nextButton';
import ChoosePlan from '../../../../../components/choosePlan';

const PlanSettings = (nextScreen, { navigation }) => {

    const goToNextActivity = () => {
        navigation.navigate(nextScreen);
    };
    return (
        <View style={styles.set}>
            <ChoosePlan title={titles.I_AM_OK} />
            <ChoosePlan title={titles.NO_JUMPING} />
            <ChoosePlan title={titles.LOW_IMPACT} />
            <View style={styles.nextButton}>
                <NextButton onPress={goToNextActivity} title={titles.NEXT_BUTTON} />
            </View>
        </View>
    )
}
export default PlanSettings