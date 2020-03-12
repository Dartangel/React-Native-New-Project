import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HealthData from '../../views/appFlow/profileScreen/components/healthData'
import Measuring from '../../views/appFlow/profileScreen/components/measuring'
import PrivacyPolicy from '../../views/appFlow/profileScreen/components/privacyPolicy'
import SetLanguage from '../../views/appFlow/profileScreen/components/setLanguage'
import SetRelaxation from '../../views/appFlow/profileScreen/components/setRelaxation'
import SetRimender from '../../views/appFlow/profileScreen/components/setReminder'
import SoundSettings from '../../views/appFlow/profileScreen/components/soundSet'
import Timer from '../../views/appFlow/profileScreen/components/timer'
import TreningScreen from '../../views/appFlow/profileScreen/components/treningScreen'
import ProfileScreen from '../../views/appFlow/profileScreen/profile'

export default SettingStackNavigator = createAppContainer(createStackNavigator(
    {
        Health: HealthData,
        Measuring: Measuring,
        Policy: PrivacyPolicy,
        Language: SetLanguage,
        Relaxation: SetRelaxation,
        Reminder: SetRimender,
        Sound: SoundSettings,
        Timer: Timer,
        Trening: TreningScreen,
        ProfileScreen
    },
    {
        initialRouteName: 'ProfileScreen',
        headerMode: false
    }

));