import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { CommonLineDividerGrey, MessageCard, TopContainerWhiteCard1 } from '../components/commonView';
import { DevHeight, DevWidth } from '../utils/device';
import CustomIcon from '../utils/Icons';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, m5, mt15, p5, pb5, pl10, pl13, pl30, pl32, pl7, pt10, pt15, pt5, spaceBetween } from '../components/commonStyles';
import { colors } from '../utils/colors';
import { H14BlackText, H14blueVar1Text, H16BlackText, H18BlackText } from '../components/commonText';
import AudioImg from '../../assets/images/Audio.svg'
import SendImg2 from '../../assets/images/sendMsg1.svg'
import { labels } from '../utils/labels';
import { Chatimg1Img } from '../utils/png';
import AlexProfile from '../../assets/images/starredProfile.svg'


export type starredMessagesProps = {


}

interface HeaderProps {
    height?: number;
}


interface CardProps {
    backgroundColor?: string

}

export const Card1 = (props: CardProps) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <MessageCard backgroundColor={colors.whiteVar1} {...props}>
                <Text style={{ color: colors.black }}>Hello @Alex Thank you for the </Text>
                <Text>beautiful web deisgn ahead schedule</Text>
            </MessageCard>
        </View>
    )
}


export const Card2 = (props: CardProps) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <MessageCard backgroundColor={colors.whiteVar1} {...props} style={flexRow}>
                <CustomIcon name="play-circle-o" size={20} color={colors.purpleVar3} type="font-awesome" />
                <View style={pl10}>
                    <AudioImg />
                </View>
                <Text style={pl13}>00:30</Text>
            </MessageCard>
        </View>
    )
}

export const Card3 = (props: CardProps) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <MessageCard backgroundColor={colors.whiteVar1} {...props} >
                <View style={[{ backgroundColor: colors.greyVar7, alignItems: 'center', padding: 10, width: DevWidth / 1.6, borderRadius: 8, margin: 5 }, flexRow, spaceBetween]}>
                    <View style={[flexRow]}>
                        <View style={justyfyCenter}>
                            <CustomIcon name='document-text-outline' type="Ionicons" color={colors.greyVar4} size={20} />
                        </View>
                        <View style={pl13}>
                            <H14BlackText>Design_Brief.pdf</H14BlackText>
                            <H14BlackText>243 KB</H14BlackText>
                        </View>
                    </View>
                    <CustomIcon name='download' type="Feather" color={colors.greyVar4} size={20} />
                </View>
                <View style={[{ margin: 5 }]}>
                    <H14BlackText>{labels.checkThisFile}</H14BlackText>
                </View>
            </MessageCard>
        </View >
    )
}

export const Card4 = (props: CardProps) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <MessageCard backgroundColor={colors.whiteVar1} {...props}>
                <View style={m5}>
                    <SendImg2 />
                    <H14blueVar1Text style={p5}>{labels.chatLink}</H14blueVar1Text>
                </View>
            </MessageCard>
        </View >
    )
}
export const StarredMsg = [
    {
        id: 1,
        renderItem: <Card1 />

    },
    {
        id: 2,
        renderItem: <Card2 />

    },
    {
        id: 3,
        renderItem: <Card3 />

    },
    {
        id: 4,
        renderItem: <Card4 />

    }
]



export const Header = (props: HeaderProps) => {
    return (
        <View>
            <TopContainerWhiteCard1 height={DevHeight / 7.5}{...props}>
                <View style={[{ marginHorizontal: 25 }, flex1, justyfyCenter]}>
                    <View style={[flexRow, spaceBetween]}>
                        <View style={[flexRow]}>
                            <View style={[alignItemsCenter, justyfyCenter]}>
                                <CustomIcon name='chevron-back-sharp' color={colors.black} size={16} type="Ionicons" />
                            </View>
                            <View style={pl13}>
                                <H18BlackText>Starred Messages</H18BlackText>
                            </View>
                        </View>
                        <View style={[flexRow, alignItemsCenter]}>
                            <CustomIcon name="search" size={22} color={colors.greyVar4} type="Ionicons" />
                            <TouchableOpacity style={pl10} >
                                <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={22} color={colors.greyVar4} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TopContainerWhiteCard1>

        </View>
    )
}

const StarredMessages = (props: starredMessagesProps) => {
    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]} >
            <Header />
            <ScrollView style={{ marginBottom: 20 }}>
                {StarredMsg.map((item, index) => (
                    <View key={index} style={{ marginHorizontal: 20 }}>
                        <View >
                            <View style={[flexRow, spaceBetween, { marginTop: 25 }]}>
                                <View style={flexRow}>
                                    <Image source={Chatimg1Img} style={{ borderRadius: 25 }} />
                                    <H16BlackText style={pl13}>{labels.MarkVilliams}</H16BlackText>
                                    <Text style={[{ fontSize: 15, color: colors.greyVar4 }, pl10]}>8:16 PM</Text>
                                </View>
                                <View style={flexRow}>
                                    <Text style={{ fontSize: 16, color: colors.greyVar4 }}>24 Aug 2023</Text>

                                    <View style={[{ paddingTop: 3 }, pl7]}>
                                        <CustomIcon name='chevron-right' color={colors.greyVar4} size={16} type="Feather"
                                        />
                                    </View>
                                </View>

                            </View>
                            <View style={{ paddingLeft: 52 }}>

                                {item.renderItem}
                                <View style={flexRow}>
                                    <AlexProfile />
                                    <H14BlackText style={[pl13, { paddingTop: 3 }]}>Alex Smith</H14BlackText>
                                    <View style={[{ alignItems: 'center', justifyContent: 'center' }, pl10]}>
                                        <CustomIcon name='star' color={colors.yellow} size={18} type="font-awesome" />
                                    </View>
                                </View>


                            </View>
                            <View style={[mt15]}>
                                <CommonLineDividerGrey />
                            </View>

                        </View>
                    </View>
                ))}
            </ScrollView>


        </View>
    )
}

export default StarredMessages