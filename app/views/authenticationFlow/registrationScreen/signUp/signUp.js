import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, AsyncStorage } from 'react-native';
import { images } from '../../../../services/utils';
import { ROUTERS } from '../../../../services/constants';
import NextButton from '../../../../components/nextButton';
import styles from './style';
import { TextInputs } from './component';
import { ScrollView } from 'react-native-gesture-handler';
import titles from '../../../../services/constants';

export default function SignUp({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const showData = async () => {
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        if (username && password) {
            if (ld.username == username && ld.password == password) {
                {
                    navigation.navigate(ROUTERS.MainScreen);
                };
            }
            else {
                alert(titles.PASSWORD_ERROR); sdfsd
            }
        }
        else {
            alert(titles.REGISTER_ALERT)
        }
    }

    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="-250" keyboardShouldPersistTaps={'always'} >
            <ScrollView >
                <ImageBackground style={styles.image} source={images.logerImage2}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{titles.AUTHORIZATION}</Text>
                        {TextInputs(titles.USERNAME, setUsername, false)}
                        {TextInputs(titles.PASSWORD, setPassword, true)}
                        <View style={styles.nextButton}>
                            <NextButton onPress={showData} title={titles.ENTER} />
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};