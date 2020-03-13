import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, AsyncStorage } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { ROUTERS } from '../../../../services/constants';
import titles from '../../../../localization/localization';
import NextButton from '../../../../components/nextButton';
import TextInputs from './components'
import { ScrollView } from 'react-native-gesture-handler';
import { registration } from '../../../../modules/redux/actions/actions'
import { connect } from 'react-redux'

const Registration = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const saveData = async () => {
        let loginDetails = {
            username: username,
            password: password,
            confirm: confirm
        }
        if (username && password && confirm) {
            if (password === confirm) {
                await AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails))
                { navigation.navigate(ROUTERS.PlanSelection), registration(username, password) }
            } else {
                alert(titles.PASSWORD_DO_NOT_MATCH)
            }
        } else {
            alert(titles.REGISTER_ALERT)
        }
    }

    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="-250" keyboardShouldPersistTaps={'always'} >
            <ScrollView>
                <ImageBackground style={styles.image} source={images.logerImage2}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{titles.REGISTRATION}</Text>
                        {TextInputs(titles.USERNAME, setUsername, false)}
                        {TextInputs(titles.PASSWORD, setPassword, true)}
                        {TextInputs(titles.CONFIRM_PASSWORD, setConfirm, true)}
                        <View style={styles.nextButton}>
                            <NextButton onPress={saveData} title={titles.NEXT_BUTTON} />
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        registration: (username, password) => dispatch(registration(username, password)),
    }
}

export default connect(null, mapDispatchToProps)(Registration)