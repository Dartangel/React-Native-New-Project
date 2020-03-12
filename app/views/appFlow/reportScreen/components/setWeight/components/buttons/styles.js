import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../services/constants';

const styles = StyleSheet.create({
    buttonsView: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttonsText: {
        color: colors.green
    },

});
export default styles;