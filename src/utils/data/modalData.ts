import { labels } from "../labels";
import { screenName } from "../screenName";

export const threeDotsOption = [
    {
        id: 1,
        name : labels.ViewContact,
        iconName : 'person-circle-outline',
        iconType : "Ionicons",
        iconSize : 25,
        screenName : screenName.ChatView,
    },
    {
        id: 2,
        name : labels.MarkAsRead,
        iconName : 'verified',
        iconType : "octicons",
        iconSize : 25,
        screenName : screenName.ChatView,
    },
]

export const CallThreeDotsOption = [
    {
        id: 1,
        name : labels.RemoveFromCallLog,
        iconName : 'delete',
        iconType : "AntDesign",
        iconSize : 25,
        screenName : screenName.ChatView,
    },
    {
        id: 5,
        name : labels.Block,
        iconName : 'block',
        iconType : "entypo",
        iconSize : 25,
        screenName : screenName.ChatView,
    },
]