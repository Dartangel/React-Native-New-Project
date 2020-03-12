import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../services/constants';

const styles = StyleSheet.create({

    subContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 25
    },
    inputView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    input: {
        width: '70%',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent'
    },
    button: {
        padding: 5,
        justifyContent: 'flex-end',
        margin: 5,
        backgroundColor: colors.green,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.grey
    },
});

export default styles;
