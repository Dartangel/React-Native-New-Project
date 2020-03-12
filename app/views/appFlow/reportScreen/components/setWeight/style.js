import { StyleSheet } from 'react-native';
import { colors } from '../../../../../services/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainView: {
        backgroundColor: colors.white,
        width: 300,
        height: 300,
    },
    buttonsView: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default styles;
