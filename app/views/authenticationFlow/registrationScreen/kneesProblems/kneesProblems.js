import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { ROUTERS } from '../../../../services/constants';
import PlanSettings from './components';
import Header from '../../../../components/header';
import titles from '../../../../localization/localization';


export default function KneesProblems({ navigation }) {

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <Header header={titles.PROBLEMS_WITH_KNEES} subHeader={titles.CHOOSE_HEALTH_PLAN} />
            {PlanSettings(ROUTERS.MainScreen, { navigation })}
        </ImageBackground>
    );
};