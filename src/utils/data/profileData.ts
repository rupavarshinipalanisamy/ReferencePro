import { socialMediaIcon } from "../../components/profile/profilecomponents";
import { colors } from "../colors";
import { GrpImg_1, GrpImg_2 } from "../png";
import { screenName } from "../screenName";


export const colorIconsData = [
    {
        id: 1,
        name: 'Starred Messages',
        iconName: 'star-outline',
        iconType: "Ionicons",
        iconSize: 20,
        iconColor: colors.yellow,
        bgcolor: colors.yellowVar1,
        screenName: screenName.StarredMsg,
    },
    {
        id: 2,
        name: 'Mute Notifications',
        iconName: 'microphone-off',
        iconType: "MaterialCommunityIcons",
        iconSize: 20,
        iconColor: colors.blueVar3,
        bgcolor: colors.blueVar4,
        screenName: screenName.Chats,
    },
    {
        id: 3,
        name: 'Encryption',
        iconName: 'lock',
        iconType: "FontAwesome",
        iconSize: 20,
        iconColor: colors.green,
        bgcolor: colors.greenVar1,
        screenName: screenName.VerifyCode,
    },
    {
        id: 4,
        name: 'Block User',
        iconName: 'block-flipped',
        iconType: "MaterialIcons",
        iconSize: 20,
        iconColor: colors.red,
        bgcolor: colors.redVar1,

    },
    {
        id: 5,
        name: 'Report User',
        iconName: 'thumbs-down',
        iconType: "Feather",
        iconSize: 20,
        iconColor: colors.purpleVar3,
        bgcolor: colors.purpleVar1,
    },
    {
        id: 6,
        name: 'Delete Chat',
        iconName: 'delete',
        iconType: "AntDesign",
        iconSize: 20,
        iconColor: colors.red,
        bgcolor: colors.redVar1,
        screenName: screenName.ChatView,
    },
]
export const mediaData = [
    {
        id: 1,
        image: require('../../../assets/images/png/mediaImg2.png')
    },
    {
        id: 2,
        image: require('../../../assets/images/png/mediaImg2.png')
    },
    {
        id: 3,
        image: require('../../../assets/images/png/mediaImg3.png')
    },
    {
        id: 4,
        image: require('../../../assets/images/png/mediaImg4.png')
    }
]

export const groupsData = [{
    id: 1,
    img:GrpImg_1,
    grpName: 'Themeforest Group',
    personName: 'Mark Villiams, Elizabeth, Michael.....'
},
{
    id: 2,
    img:GrpImg_2,
    grpName: 'Graphics Designers',
    personName: 'Mark Villiams, Elizabeth, Michael.....'
}

]

export const InfoCardData = [{
    "Phone": "9988776655",
    "Email Address": 'info@example.com',
    "Social Media": socialMediaIcon()
}]