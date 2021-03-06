import { StyleSheet } from 'react-native'
import { colors } from '../../../../services/constants/index'

const styles = StyleSheet.create({

    nextButton: {
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    header1: {
        fontSize: 20,
        color: colors.white
    },
    header2: {
        paddingLeft: 15,
        color: colors.white
    },
    logo: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    set: {
        flex: 1,
    },
    regButton: {
        alignItems: 'center',
        paddingVertical: 20,
        alignItems: 'center',
        height: '17%',
        backgroundColor: colors.rgba,
        borderRadius: 25,
        marginBottom: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
})

export default styles