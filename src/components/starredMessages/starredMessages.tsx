import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { CommonLineDividerGrey, MessageCard, TopContainerWhiteCard1 } from '../commonView';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import AudioImg from '../../../assets/images/Audio.svg'
import SendImg2 from '../../../assets/images/sendMsg1.svg'

import { flexRow, justyfyCenter, m5, p5, pl10, pl13, spaceBetween } from '../commonStyles';
import { DevWidth } from '../../utils/device';
import { H14BlackText, H14BlackVar2Bold400Text, H14blueVar1Text } from '../commonText';
import { labels } from '../../utils/labels';
import { isDark } from '../../Theme/ThemeContext';





interface CardProps {
    backgroundColor?: string

}
export const Card1 = (props: CardProps) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <MessageCard backgroundColor={isDark()?colors.darkModeVar4:colors.whiteVar1} {...props}>
                <H14BlackVar2Bold400Text style={{lineHeight:20,letterSpacing:0.3}}>Hello @Alex Thank you for the </H14BlackVar2Bold400Text>
                <H14BlackVar2Bold400Text style={{lineHeight:20,letterSpacing:0.3}}>beautiful web deisgn ahead schedule</H14BlackVar2Bold400Text>
            </MessageCard>
        </View>
    )
}


export const Card2 = (props: CardProps) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <MessageCard backgroundColor={isDark()?colors.darkModeVar4:colors.whiteVar1} {...props} style={flexRow}>
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
            <MessageCard backgroundColor={isDark()?colors.darkModeVar4:colors.whiteVar1} {...props} >
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
            <MessageCard backgroundColor={isDark()?colors.darkModeVar4:colors.whiteVar1} {...props}>
                <View style={m5}>
                    <SendImg2 />
                    <H14blueVar1Text style={p5}>{labels.chatLink}</H14blueVar1Text>
                </View>
            </MessageCard>
        </View >
    )
}