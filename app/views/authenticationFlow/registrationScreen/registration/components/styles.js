import { colors } from "../../../../../services/constants";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

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
});
export default styles;