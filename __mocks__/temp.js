import { titles, ROUTERS } from "../app/services/constants";

export const itemList = ['0-5', '5-10', '10-20', 'Более 20', ''];

export const items = [
    { text: titles.FIRST_DAY },
    { text: titles.SECOND_DAY },
    { text: titles.THIRD_DAY },
    { text: titles.FOURTH_DAY },
    { text: titles.FIFTH_DAY },
    { text: titles.SIXTH_DAY },
    { text: titles.SEVENTH_DAY },
];

export const headers = [
    { text: titles.FIRST_WEEK },
    { text: titles.SECOND_WEEK },
    { text: titles.THIRD_WEEK },
    { text: titles.FOURTH_WEEK },
];

export const warmUpList = [
    {
        header: titles.REMINDER,
        time: '21:00',
        icon: 'md-alarm',
        screen: ROUTERS.Reminder
    },
    {
        header: titles.COUNTDOWN,
        time: '10 сек',
        icon: 'ios-sync',
        screen: ROUTERS.Timer
    },
    {
        header: titles.RELAXATION,
        time: '10 сек',
        icon: 'md-cafe',
        screen: ROUTERS.Relaxation
    },
    {
        header: titles.SOUND_SETTINGS,
        time: null,
        icon: 'md-volume-high',
        screen: ROUTERS.Sound
    }
]

export const generalSettings = [

    {
        header: titles.SYNCHRONIZATION_GOOGLE,
        time: null,
        icon: 'ios-heart',
        screen: ROUTERS.ProfileScreen
    },
    {
        header: titles.HEALTH_DATA,
        time: null,
        icon: 'ios-medkit',
        screen: ROUTERS.HealthData
    },
    {
        header: titles.METRIC_UNITS,
        time: null,
        icon: 'ios-appstore',
        screen: ROUTERS.Measuring
    },
    {
        header: titles.CHOOSE_LANGUAGE,
        time: null,
        icon: 'ios-globe',
        screen: ROUTERS.Language
    },
    {
        header: titles.RESET_RESULT,
        time: null,
        icon: 'ios-refresh',
        screen: ROUTERS.ProfileScreen
    }
]

export const soundSettings = [
    {
        header: titles.SPEECH_TEST,
        time: null,
        icon: 'ios-heart',
        screen: ROUTERS.ProfileScreen
    },
    {
        header: titles.CHOOSE_SYNTHESIZER,
        time: null,
        icon: 'md-settings',
        screen: ROUTERS.ProfileScreen
    },
    {
        header: titles.DOWNLOAD_SYNTHESIZER,
        time: null,
        icon: 'md-download',
        screen: ROUTERS.ProfileScreen
    },
    {
        header: titles.SOUND_LANGUAGE,
        time: null,
        icon: 'ios-mic',
        screen: ROUTERS.ProfileScreen
    },
    {
        header: titles.DOWNLOAD_MORE_SYNTHESIZE,
        time: null,
        icon: 'ios-code-download',
        screen: ROUTERS.ProfileScreen
    },
    {
        header: titles.TTS_SETTINGS,
        time: null,
        icon: 'ios-options',
        screen: ROUTERS.ProfileScreen
    },
]

export const supportList = [
    {
        header: titles.SHARE,
        time: null,
        icon: 'md-share',
        screen: ROUTERS.ProfileScreen
    },
    {
        header: titles.RATE_US,
        time: null,
        icon: 'md-checkbox',
        screen: ROUTERS.ProfileScreen
    },
    {
        header: titles.FEED_BACK,
        time: null,
        icon: 'ios-paper-plane',
        screen: ROUTERS.ProfileScreen
    },
    {
        header: titles.PRIVACY_POLICY,
        time: null,
        icon: 'ios-eye',
        screen: ROUTERS.Policy
    },
]

export const blocks = [
    {
        arrays: warmUpList,
        header: titles.WARM_UP,
    },
    {
        arrays: generalSettings,
        header: titles.GENERAL_SETTINGS,
    },
    {
        arrays: soundSettings,
        header: titles.SOUND_OPTIONS,
    },
    {
        arrays: supportList,
        header: titles.SUPPORT_US,
    },
]

export const screensList = [

    { screen: ROUTERS.HealthData },
    { screen: ROUTERS.Measuring },
    { screen: ROUTERS.Policy },
    { screen: ROUTERS.Language },
    { screen: ROUTERS.Relaxation },
    { screen: ROUTERS.Reminder },
    { screen: ROUTERS.Weight },
    { screen: ROUTERS.Sound },
    { screen: ROUTERS.Timer },
    { screen: ROUTERS.Trening },
]