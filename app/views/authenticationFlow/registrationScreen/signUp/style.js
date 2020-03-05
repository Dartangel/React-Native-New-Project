import { colors } from "../../../../services/constants";
import { StyleSheet, Dimensions } from 'react-native';

export const width = Math.round(Dimensions.get('window').width);
export const height = Math.round(Dimensions.get('window').height)

export default styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
    },
    nextButton: {
        paddingHorizontal: '20%'
    },
    image: {
        width: '100%',
        height: height - 24
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    TextInput: {
        backgroundColor: colors.rgba,
        borderRadius: 25,
        marginBottom: 30,
        fontSize: 20,
        color: colors.green,
        paddingStart: 20,
        alignSelf: 'stretch',
        height: 60,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
    },
    text:
    {
        alignSelf: 'center',
        fontSize: 35,
        paddingBottom: 10,
        color: colors.white
    },
})