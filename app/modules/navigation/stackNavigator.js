import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from '../../views/authenticationFlow/registrationScreen/firstScreen/firstScreen';
import Registration from '../../views/authenticationFlow/registrationScreen/registration/registration';
import KneesProblems from '../../views/authenticationFlow/registrationScreen/kneesProblems/kneesProblems';
import PlanSelection from '../../views/authenticationFlow/registrationScreen/planSelection/planSelection';
import PickStrength from '../../views/authenticationFlow/registrationScreen/pickStrength/pickStrength';
import StrapDuration from '../../views/authenticationFlow/registrationScreen/strapDuration/strapDuration';
import TabBarNavigator from './tabNavigator';
import SignUp from '../../views/authenticationFlow/registrationScreen/signUp/signUp'
import { colors } from '../../services/constants';

const navigationOptions = {
    headerMode: 'none',
    headerTintColor: colors.white,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

export const AuthenticationStack = createStackNavigator({
    FirstScreen,
    SignUp,
    Registration,
    KneesProblems,
    PlanSelection,
    PickStrength,
    StrapDuration
}, navigationOptions);

export const AppStack = createStackNavigator({
    TabBarNavigator
}, navigationOptions);
