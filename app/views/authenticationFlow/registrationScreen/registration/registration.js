import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, ScrollView } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { ROUTERS } from '../../../../services/constants';
import titles from '../../../../localization/localization';
import NextButton from '../../../../components/nextButton';
import TextInputs from './components'
import { registr } from '../../../../modules/redux/actions/action'
import { connect } from 'react-redux'

const Registration = ({ navigation, registr }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const saveData = async () => {
        if (username && password && confirm) {
            if (password === confirm) {
                { navigation.navigate(ROUTERS.PlanSelection), registr(username, password) }
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

const mapDispatchToProps = {

    registr
}
export default connect(null, mapDispatchToProps)(Registration)