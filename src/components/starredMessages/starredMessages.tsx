import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MessageCard, TopContainerWhiteCard1 } from '../commonView';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import AudioImg from '../../../assets/images/Audio.svg'
import SendImg2 from '../../../assets/images/sendMsg1.svg'

import { flexRow, justyfyCenter, m5, mt3, p5, pl10, pl13, spaceBetween } from '../commonStyles';
import { DevWidth } from '../../utils/device';
import { H12DefaultGreyVar3, H12GreyVar8, H14BlackText, H14BlackVar2Bold400Text, H14blackVar1bold400Text, H14blueVar1Text, H14font400grey3black2 } from '../commonText';
import { labels } from '../../utils/labels';
import { isDark } from '../../Theme/ThemeContext';





interface CardProps {
    backgroundColor?: string

}
export const Card1 = (props: CardProps) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <MessageCard backgroundColor={isDark() ? colors.darkModeVar4 : colors.whiteVar1} {...props}>
                <H14font400grey3black2 style={{ lineHeight: 20, letterSpacing: 0.3 }}>Hello @Alex Thank you for the </H14font400grey3black2>
                <H14font400grey3black2 style={{ lineHeight: 20, letterSpacing: 0.3 }}>beautiful web deisgn ahead schedule</H14font400grey3black2>
            </MessageCard>
        </View>
    )
}


export const Card2 = (props: CardProps) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <MessageCard backgroundColor={isDark() ? colors.darkModeVar4 : colors.whiteVar1} {...props} style={flexRow}>
                <CustomIcon name="play-circle-o" size={20} color={colors.purpleVar3} type="font-awesome" />
                <View style={pl10}>
                    <AudioImg />
                </View>
                <H12DefaultGreyVar3 style={[mt3, pl10]}>00:30</H12DefaultGreyVar3>
            </MessageCard>
        </View>
    )
}

export const Card3 = (props: CardProps) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <MessageCard backgroundColor={isDark() ? colors.darkModeVar4 : colors.whiteVar1} {...props} >
                <View style={[{ backgroundColor: isDark() ? colors.darkModeVar6 : colors.greyVar7, alignItems: 'center', padding: 10, width: DevWidth / 1.6, borderRadius: 8, margin: 5 }, flexRow, spaceBetween]}>
                    <View style={[flexRow]}>
                        <View style={justyfyCenter}>
                            <CustomIcon name='document-text-outline' type="Ionicons" color={isDark() ? colors.greyVar3 : colors.greyVar4} size={20} />
                        </View>
                        <View style={pl13}>
                            <H14blackVar1bold400Text>Design_Brief.pdf</H14blackVar1bold400Text>
                            <H12GreyVar8>243 KB</H12GreyVar8>
                        </View>
                    </View>
                    <CustomIcon name='download' type="Feather" color={isDark() ? colors.greyVar3 : colors.greyVar4} size={20} />
                </View>
                <View style={[{ margin: 5 }]}>
                    <H14font400grey3black2>{labels.checkThisFile}</H14font400grey3black2>
                </View>
            </MessageCard>
        </View >

    )
}



export const Card4 = (props: CardProps) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <MessageCard backgroundColor={isDark() ? colors.darkModeVar4 : colors.whiteVar1} {...props}>
                <View style={m5}>
                    <SendImg2 />
                    <H14blueVar1Text style={p5}>{labels.chatLink}</H14blueVar1Text>
                </View>
            </MessageCard>
        </View >
    )
}