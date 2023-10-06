import { labels } from "../labels";
import { screenName } from "../screenName";

export const threeDotsOption = [
    {
        id: 1,
        name : labels.ViewContact,
        iconName : 'person-circle-outline',
        iconType : "Ionicons",
        iconSize : 18,
        screenName : screenName.ChatView,
    },
    {
        id: 2,
        name : labels.MarkAsRead,
        iconName : 'checkmark-circle-outline',
        iconType : "Ionicons",
        iconSize : 18,
        screenName : screenName.ChatView,}]

export const profilePic = [
    {
        id: 1,
        status: labels.everyOne,
    },
    {
        id: 2,
        status: labels.myContact,
    },
    {
        id: 3,
        status: labels.myConExpect,
    },
    {
        id: 4,
        status: labels.nobody,
    },
]

export const lastSee = [
    {
        id: 1,
        status: labels.everyOne,
    },
    {
        id: 2,
        status: labels.sameandlastSeen

    }
]


export const groupsData = [
    {
        id: 1,
        status: labels.everyOne,
    },
    {
        id: 2,
        status: labels.myContact,
    },
    {
        id: 3,
        status: labels.myConExpect,
    },
]


export const chooseTheme =[
    {
        id:1,
        status:labels.systemDefault
    },
    {
        id:2,
        status:labels.light
    },
    {
        id:3,
        status:labels.dark
    }
]

export const clearAllChats =[
    {
        id:1,
        status:labels.deleteMsg1
    },
    {
        id:2,
        status:labels.deleteMsg2
    },
]

export const deleteAllChats =[
    {
        id:1,
        status:labels.deleteMsg1,
        iconSize : 20,
        screenName : screenName.ChatView,
    },
]

export const CallThreeDotsOption = [
    {
        id: 1,
        name : labels.RemoveFromCallLog,
        iconName : 'delete',
        iconType : "AntDesign",
        iconSize : 20,
        screenName : screenName.ChatView,
    },
    {
        id: 5,
        name : labels.Block,
        iconName : 'block',
        iconType : "entypo",
        iconSize : 20,
        screenName : screenName.ChatView,
    },
]