import { colors } from "../../../../services/constants";
import { StyleSheet, Dimensions } from 'react-native';
export const height = Math.round(Dimensions.get('window').height)

const styles = StyleSheet.create({

    nextButton: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'
    },
    image: {
        width: '100%',
        height: height - 24
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    TextInput: {
        backgroundColor: colors.rgba,
        borderRadius: 25,
        marginBottom: 10,
        color: colors.green,
        fontSize: 20,
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        height: 60,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
    },
    text: {
        alignSelf: 'center',
        fontSize: 35,
        paddingBottom: 10,
        color: colors.white
    },
    button: {
        borderRadius: 25,
        marginHorizontal: 20,
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 15,
        backgroundColor: colors.green,
        marginTop: 30,
    },

});
export default styles;