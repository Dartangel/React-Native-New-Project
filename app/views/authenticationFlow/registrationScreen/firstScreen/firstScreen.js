import React from 'react';
import styles from './styles';
import { View, ImageBackground } from 'react-native';
import { images } from '../../../../services/utils/index';
import { ROUTERS } from '../../../../services/constants';
import titles from '../../../../localization/localization';
import FirstButtons from '../../../../components/firstButtons';

export default function FirstScreen({ navigation }) {

    const goToAuthorizationScreen = () => {
        navigation.navigate(ROUTERS.SignUp);
    };

    const _signInAsync = async () => {
        navigation.navigate(ROUTERS.Registration);
    };

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <View style={styles.container}>
                <FirstButtons onPress={goToAuthorizationScreen} title={titles.ENTER} />
                <FirstButtons onPress={_signInAsync} title={titles.REGISTRATION} />
            </View>
        </ImageBackground>
    );
};