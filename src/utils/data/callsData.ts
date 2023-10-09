import { colors } from "../colors";
import { labels } from "../labels";
import { BlueSignalImg, Chatimg1Img, Chatimg2Img, Chatimg3Img, Chatimg4Img, Chatimg5Img, Chatimg6Img, Chatimg7Img, Chatimg8Img, GreenSignalImg, PurpleSignalImg, YellowSignalImg } from "../png";
import { BlueSignalIcon, GreenSignalIcon, PurpleSignalIcon, YellowSignalIcon } from "../svg";

export const callBottomData = [
    {
        id: 1,
        iconName: 'phone-off',
        iconColor: colors.red,
        iconSize: 20,
        iconType: 'Feather',
        bgColor: colors.redVar1,
        text: labels.Decline,
    },
    {
        id: 2,
        iconName: 'phone',
        iconColor: colors.white,
        iconSize: 20,
        iconType: 'Feather',
        bgColor: colors.green,
        text: labels.Accept,
    },
    {
        id: 3,
        iconName: 'chatbox-ellipses-outline',
        iconColor: colors.purpleVar3,
        iconSize: 20,
        iconType: 'Ionicons',
        bgColor: colors.purpleVar1,
        text: labels.Message
    },
]

export const callBottomDataSecond = [
    {
        id: 1,
        iconName: 'sound',
        iconColor: colors.greyVar4,
        iconSize: 22,
        iconType: 'AntDesign',
    },
    {
        id: 2,
        iconName: 'video-outline',
        iconColor: colors.greyVar2,
        iconSize: 23,
        iconType: 'MaterialCommunityIcons',
    },
    {
        id: 3,
        iconName: 'microphone-off',
        iconColor: colors.greyVar4,
        iconSize: 23,
        iconType: 'MaterialCommunityIcons',
    },
    {
        id: 4,
        iconName: 'phone',
        iconColor: colors.red,
        iconSize: 23,
        iconType: 'Feather',
    },
]

export const callBottomDataThird = [
    {
        id: 1,
        iconName: 'sound',
        iconColor: colors.greyVar4,
        iconSize: 22,
        iconType: 'AntDesign',
    },
    {
        id: 2,
        iconName: 'video-outline',
        iconColor: colors.greyVar4,
        iconSize: 23,
        iconType: 'MaterialCommunityIcons',
    },
    {
        id: 3,
        iconName: 'microphone-off',
        iconColor: colors.greyVar4,
        iconSize: 23,
        iconType: 'MaterialCommunityIcons',
    },
    {
        id: 4,
        iconName: 'phone',
        iconColor: colors.red,
        iconSize: 23,
        iconType: 'Feather',
    },
]

export const callBottomDataFourth = [
    {
        id: 1,
        iconName: 'camera',
        iconColor: colors.purpleVar3,
        iconSize: 22,
        iconType: 'Feather',
    },
    {
        id: 2,
        iconName: 'video-off-outline',
        iconColor: colors.greyVar4,
        iconSize: 23,
        iconType: 'MaterialCommunityIcons',
    },
    {
        id: 3,
        iconName: 'microphone-off',
        iconColor: colors.greyVar4,
        iconSize: 23,
        iconType: 'MaterialCommunityIcons',
    },
    {
        id: 4,
        iconName: 'phone',
        iconColor: colors.red,
        iconSize: 23,
        iconType: 'Feather',
    },
]

export const groupCallData = [
    {
        id: 1,
        name : labels.horaceKeene,
        image : Chatimg1Img,
        color : colors.purpleVar3,
        soundImg : PurpleSignalImg,
    },
    {
        id: 2,
        name : labels.MarkVilliams,
        image : Chatimg4Img,
        color : colors.green,
        soundImg : GreenSignalImg,
    },
    {
        id: 3,
        name : labels.ElizabethSosa,
        image : Chatimg2Img,
        color : colors.yellow,
        soundImg : YellowSignalImg,
    },
    {
        id: 4,
        name : labels.JamesAlbert,
        image : Chatimg6Img,
        color : colors.blueVar3,
        soundImg : BlueSignalImg,
    },
]

export const AllCallsdata = [
    {
        id : 1,
        name : labels.MarkVilliams,
        text : 'Just Now',
        duration : '34:50',
        iconName : 'phone-incoming',
        iconColor : colors.green,
        iconType : 'Feather',
        iconSize : 20,
        status : 'active',
        DurationColor : colors.greyVar4,
        img : Chatimg1Img,
    },
    {
        id : 2,
        name : labels.ElizabethSosa,
        text : '45 Minutes Ago',
        duration : '10:26',
        iconName : 'phone-outgoing',
        iconColor : colors.green,
        iconType : 'Feather',
        iconSize : 20,
        status : 'inactive',
        DurationColor : colors.greyVar4,
        img : Chatimg2Img,
    },
    {
        id : 3,
        name : labels.MichaelHoward,
        text : 'Today, 08:26 AM',
        duration : '02:39',
        iconName : 'video-outline',
        iconColor : colors.green,
        iconType : 'MaterialCommunityIcons',
        iconSize : 20,
        status : 'active',
        DurationColor : colors.greyVar4,
        img : Chatimg3Img,
    },
    {
        id : 4,
        name : labels.horaceKeene,
        text : 'Yesterday, 02:23 PM',
        duration : 'Missed',
        iconName : 'video-outline',
        iconColor : colors.red,
        iconType : 'MaterialCommunityIcons',
        iconSize : 20,
        status : 'inactive',
        DurationColor : colors.red,
        img : Chatimg4Img,
    },
    {
        id : 5,
        name : labels.HollisTran,
        text : '12 Aug 2023, 09:47 PM',
        duration : '10:48',
        iconName : 'phone-incoming',
        iconColor : colors.green,
        iconType : 'Feather',
        iconSize : 20,
        status : 'inactive',
        DurationColor : colors.greyVar4,
        img : Chatimg5Img,
    },
    {
        id : 6,
        name : labels.JamesAlbert,
        text : '05 Aug 2023, 01:24 PM',
        duration : '04:28',
        iconName : 'video-outline',
        iconColor : colors.green,
        iconType : 'MaterialCommunityIcons',
        iconSize : 20,
        status : 'active',
        DurationColor : colors.greyVar4,
        img : Chatimg6Img,
    },
    {
        id : 7,
        name : labels.DinaBrown,
        text : '24 Jul 2023, 09:47 PM',
        duration : 'Missed',
        iconName : 'phone-incoming',
        iconColor : colors.red,
        iconType : 'Feather',
        iconSize : 20,
        status : 'inactive',
        DurationColor : colors.red,
        img : Chatimg7Img,
    },
    {
        id : 8,
        name : labels.JudyMercer,
        text : '17 Jul 2023, 05:34 AM',
        duration : '34:50',
        iconName : 'phone-outgoing',
        iconColor : colors.green,
        iconType : 'Feather',
        iconSize : 20,
        status : 'inactive',
        DurationColor : colors.greyVar4,
        img : Chatimg8Img,
    },
    {
        id : 9,
        name : labels.DinaBrown,
        text : '24 Jul 2023, 09:47 PM',
        duration : 'Missed',
        iconName : 'phone-incoming',
        iconColor : colors.red,
        iconType : 'Feather',
        iconSize : 20,
        status : 'inactive',
        DurationColor : colors.red,
        img : Chatimg7Img,
    },
    {
        id : 10,
        name : labels.JudyMercer,
        text : '17 Jul 2023, 05:34 AM',
        duration : '34:50',
        iconName : 'phone-outgoing',
        iconColor : colors.green,
        iconType : 'Feather',
        iconSize : 20,
        status : 'inactive',
        DurationColor : colors.greyVar4,
        img : Chatimg8Img,
    },
]

export const callHistoryTodaydata = [
    {
        id : 1,
        name : labels.Outgoing,
        text : 'Just Now',
        duration : '34:50',
        iconName : 'phone-outgoing',
        iconColor : colors.green,
        iconType : 'Feather',
        iconSize : 18,
        DurationColor : colors.greyVar4,
        img : Chatimg1Img,
    },
    {
        id : 2,
        name : labels.Incoming,
        text : '45 Minutes Ago',
        duration : '10:26',
        iconName : 'phone-incoming',
        iconColor : colors.green,
        iconType : 'Feather',
        iconSize : 18,
        DurationColor : colors.greyVar4,
        img : Chatimg4Img,
    },
    {
        id : 3,
        name : labels.Incoming,
        text : 'Today, 08:26 AM',
        duration : labels.Missed,
        iconName : 'video-outline',
        iconColor : colors.red,
        iconType : 'MaterialCommunityIcons',
        iconSize : 20,
        DurationColor : colors.red,
        img : Chatimg4Img,
    },
]

export const callHistoryYesterdaydata = [
    {
        id : 1,
        name : labels.Outgoing,
        text : 'Just Now',
        duration : 'Not Answered',
        iconName : 'video-outline',
        iconColor : colors.greyVar4,
        iconType : 'MaterialCommunityIcons',
        iconSize : 20,
        DurationColor : colors.greyVar4,
        img : Chatimg1Img,
    },
    {
        id : 2,
        name : labels.Incoming,
        text : '45 Minutes Ago',
        duration : '10:26',
        iconName : 'phone-incoming',
        iconColor : colors.green,
        iconType : 'Feather',
        iconSize : 18,
        DurationColor : colors.greyVar4,
        img : Chatimg4Img,
    },
    {
        id : 3,
        name : labels.Incoming,
        text : 'Today, 08:26 AM',
        duration : labels.Missed,
        iconName : 'phone-incoming',
        iconColor : colors.red,
        iconType : 'Feather',
        iconSize : 18,
        DurationColor : colors.red,
        img : Chatimg4Img,
    },
]

export const callHistoryThirddata = [
    {
        id : 1,
        name : labels.Outgoing,
        text : 'Just Now',
        duration : labels.Yesterday,
        iconName : 'video-outline',
        iconColor : colors.greyVar4,
        iconType : 'MaterialCommunityIcons',
        iconSize : 20,
        DurationColor : colors.greyVar4,
        img : Chatimg1Img,
    },
    {
        id : 2,
        name : labels.Incoming,
        text : '45 Minutes Ago',
        duration : '10:26',
        iconName : 'phone-incoming',
        iconColor : colors.green,
        iconType : 'Feather',
        iconSize : 20,
        DurationColor : colors.greyVar4,
        img : Chatimg4Img,
    },
    {
        id : 3,
        name : labels.Incoming,
        text : 'Today, 08:26 AM',
        duration : '02:39',
        iconName : 'phone-incoming',
        iconColor : colors.green,
        iconType : 'Feather',
        iconSize : 20,
        DurationColor : colors.greyVar4,
        img : Chatimg4Img,
    },
]