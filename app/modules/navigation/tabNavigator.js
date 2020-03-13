import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import ReportScreen from '../../views/appFlow/reportScreen/reportScreen';
import MainScreen from '../../views/appFlow/mainScreen/mainScreen';
import { colors } from '../../services/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import SettingStackNavigator from './settingStackNavigator'
import ReportStackNavigator from './reportStackNavigation'
import titles from '../../localization/localization'

const TabBarNavigator = createBottomTabNavigator({

    MainScreen: {
        screen: MainScreen,
        navigationOptions: {
            tabBarLabel: titles.PLAN,
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-today" color={tintColor} size={22} />
            ),
        },
    },

    ReportStackNavigator: {
        screen: ReportStackNavigator,
        navigationOptions: {
            tabBarLabel: titles.REPORT,
            tabBarIcon: ({ tintColor }) => (
                <Feather name="bar-chart-2" color={tintColor} size={25} />
            ),
        },
    },

    SettingStackNavigator: {
        screen: SettingStackNavigator,
        navigationOptions: {
            tabBarLabel: titles.I_AM,
            tabBarIcon: ({ tintColor }) => (
                <Icon1 name="person" color={tintColor} size={40} />
            )

        },
    },

},
    {
        tabBarOptions: {

            activeTintColor: colors.green,
            inactiveTintColor: colors.white,
            showIcon: true,
            style: {
                height: 60,
                backgroundColor: colors.mainBackground,
            },
            labelStyle: {
                fontSize: 14,
            },
        },
    }
);
export default TabBarNavigator