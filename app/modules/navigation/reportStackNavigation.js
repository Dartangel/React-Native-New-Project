import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Weight from '../../views/appFlow/reportScreen/components/setWeight'
import ReportScreen from '../../views/appFlow/reportScreen/reportScreen'

export default ReportStackNavigator = createAppContainer(createStackNavigator(
    {
        Weight: Weight,
        ReportScreen: ReportScreen
    },
    {
        initialRouteName: 'ReportScreen',
        headerMode: false
    }
));