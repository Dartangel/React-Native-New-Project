import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { ROUTERS } from '../../../../services/constants';
import titles from '../../../../services/constants';
import { PlanSettings } from './components';
import Header from '../../../../components/header';

export default function PlanSelection({ navigation }) {

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <Header header={titles.CHOOSE_PLAN} subHeader={titles.TRAINING_PLAN} />
            {PlanSettings(ROUTERS.PickStrength, { navigation })}
        </ImageBackground>
    );
};