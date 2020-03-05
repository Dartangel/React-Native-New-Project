import { titles } from "../app/services/constants";

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

    },
    {
        header: titles.COUNTDOWN,
        time: '10 сек',
        icon: 'ios-sync',
    },
    {
        header: titles.RELAXATION,
        time: '10 сек',
        icon: 'md-cafe',
    },
    {
        header: titles.SOUND_SETTINGS,
        time: null,
        icon: 'md-volume-high',
    }
]

export const generalSettings = [

    {
        header: titles.SYNCHRONIZATION_GOOGLE,
        time: null,
        icon: 'ios-heart',
    },
    {
        header: titles.HEALTH_DATA,
        time: null,
        icon: 'ios-medkit',
    },
    {
        header: titles.METRIC_UNITS,
        time: null,
        icon: 'ios-appstore',
    },
    {
        header: titles.CHOOSE_LANGUAGE,
        time: null,
        icon: 'ios-globe',
    },
    {
        header: titles.RESET_RESULT,
        time: null,
        icon: 'ios-refresh',
    }
]

export const soundSettings = [
    {
        header: titles.SPEECH_TEST,
        time: null,
        icon: 'ios-heart',
    },
    {
        header: titles.CHOOSE_SYNTHESIZER,
        time: null,
        icon: 'md-settings',
    },
    {
        header: titles.DOWNLOAD_SYNTHESIZER,
        time: null,
        icon: 'md-download',
    },
    {
        header: titles.SOUND_LANGUAGE,
        time: null,
        icon: 'ios-mic',
    },
    {
        header: titles.DOWNLOAD_MORE_SYNTHESIZE,
        time: null,
        icon: 'ios-code-download',
    },
    {
        header: titles.TTS_SETTINGS,
        time: null,
        icon: 'ios-options',
    },
]

export const supportList = [
    {
        header: titles.SHARE,
        time: null,
        icon: 'md-share',
    },
    {
        header: titles.RATE_US,
        time: null,
        icon: 'md-checkbox',
    },
    {
        header: titles.FEED_BACK,
        time: null,
        icon: 'ios-paper-plane',
    },
    {
        header: titles.PRIVACY_POLICY,
        time: null,
        icon: 'ios-eye',
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