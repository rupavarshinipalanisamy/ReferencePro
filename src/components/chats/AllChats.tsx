import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors } from '../../utils/colors';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flex1, flexRow, justyfyCenter, mb15, mb60, ml15, mr5, mt20, p10, pb5, ph20, pv15, spaceBetween, spaceEvenly } from '../commonStyles';
import { allChatsData } from '../../utils/data/chatsData';
import { DevWidth } from '../../utils/device';
import { CommonLineDividerGrey, RowSpaceBetween, RowSpaceEvenly } from '../commonView';
import { labels } from '../../utils/labels';
import { H12fontBold400GreyVar4, H12fontBold400blackVar2, H14GreenBold400, H14GreyVar4Bold400, H14RedBold400, H15Blackvar2Bold500, H16GreyVar4Bold600Text } from '../commonText';
import { ArchiveIconBlackIcon, ArchiveIconDarkShade1Icon, BlackDoubleTickIcon, BlackSingleTickIcon, BlueDoubleTickIcon, DoubleTickDarkIcon, FileBlackIcon, FileDarkIcon, ImageDarkIcon, MicrophoneDarkIcon, MikeBlackIcon, PhoneIncomingDarkIcon, PhoneIncomingRedIcon, PictureBlackIcon, PinBlackIcon, PinDarkIcon, SingleTickDarkIcon, VideoBlackIcon, VideoDarkIcon } from '../../utils/svg';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { BottomTabBar } from '../commonComponents';
import { useTheme } from '../../Theme/ThemeContext';
import CustomIcon from '../../utils/Icons';


export type AllChatsProps = {
    selectedCards: number[];
    onCardSelection: (cardId: number) => void;
}

const AllChats = ({ selectedCards, onCardSelection }: AllChatsProps) => {
    const navigation = useNavigation();
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';

    return (
        <View style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar2 : colors.white }, flex1, mt20, styles.whiteBg]}>
            <ScrollView showsVerticalScrollIndicator={false} style={mb60}>
                <View style={[flexRow, spaceBetween, mt20, alignSelfCenter, p10, borderRadius10, styles.archiveCard, mb15, { backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1, }]}>
                    <View style={[flexRow, spaceEvenly]}>
                        {isDarkTheme ? <ArchiveIconDarkShade1Icon /> : <ArchiveIconBlackIcon />}
                        <H16GreyVar4Bold600Text style={[ml15, { letterSpacing: 0.5, color: isDarkTheme ? colors.greyVar0 : colors.greyVar4 }]}>{labels.Archived}</H16GreyVar4Bold600Text>
                    </View>
                    <View style={[styles.roundNumberRed, alignItemsCenter, justyfyCenter, { backgroundColor: isDarkTheme ? colors.redVar2 : colors.red }]}>
                        <Text style={[styles.roundNumberTextRed]}>10</Text>
                    </View>
                </View>
                <View style={flex1}>
                    {allChatsData.map((chat) => (
                        <View key={chat.id}>
                            <CommonLineDividerGrey style={{ backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0 }} />
                            <TouchableOpacity onPress={() => {
                                if (selectedCards.length === 0) {
                                    navigation.navigate(screenName.ChatView as never);
                                } else {
                                    onCardSelection(chat.id);
                                }
                            }}
                                onLongPress={() => {
                                    if (!selectedCards.includes(chat.id)) {
                                        onCardSelection(chat.id);
                                    }
                                }} style={[ph20, pv15, { backgroundColor: selectedCards.includes(chat.id) ? (isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1) : (isDarkTheme ? colors.darkModeVar2 : 'transparent') }]}>
                                <View style={[flexRow]}>
                                    <View>
                                        <Image source={chat.profileImg} style={styles.profileImg} />
                                        {
                                            selectedCards.includes(chat.id) ? (
                                                <View style={[{ backgroundColor: colors.green, borderColor: isDarkTheme ? colors.darkModeVar2 : colors.white, }, styles.statusTick, alignItemsCenter, justyfyCenter]} >
                                                    <CustomIcon name='check' size={10} color={colors.white} type='entypo' />
                                                </View>
                                            ) : (
                                                <View style={[{ backgroundColor: chat.status === 'active' ? '#20c997' : '', borderColor: isDarkTheme ? colors.darkModeVar2 : colors.white }, chat.status === 'active' ? styles.status : null]} />
                                            )
                                        }
                                    </View>
                                    <View style={[flex1]}>
                                        <RowSpaceBetween style={pb5}>
                                            <H15Blackvar2Bold500 style={{ color: isDarkTheme ? colors.greyVar0 : colors.blackVar2 }}>{chat.name}</H15Blackvar2Bold500>
                                            {
                                                chat.id === 4 ? (
                                                    <H12fontBold400blackVar2 style={{ color: isDarkTheme ? colors.greyVar0 : colors.blackVar2 }}>{labels.Time1020}</H12fontBold400blackVar2>
                                                ) : (
                                                    <H12fontBold400GreyVar4 style={{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }}>{labels.Time1020}</H12fontBold400GreyVar4>
                                                )
                                            }
                                        </RowSpaceBetween>
                                        {chat.id === 1 ? (
                                            <RowSpaceBetween>
                                                <H14GreenBold400 style={{ color: isDarkTheme ? colors.greenVar2 : colors.green }}>{labels.Typing}</H14GreenBold400>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <BlueDoubleTickIcon />
                                                    </View>
                                                    {isDarkTheme ? <PinDarkIcon /> : <PinBlackIcon />}
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : chat.id === 2 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        {isDarkTheme ? <VideoDarkIcon /> : <VideoBlackIcon />}
                                                    </View>
                                                    <H14GreyVar4Bold400 style={{ color: isDarkTheme ? colors.greyVar0 : colors.greyVar4 }}>{labels.Video}</H14GreyVar4Bold400>
                                                </RowSpaceEvenly>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <BlueDoubleTickIcon />
                                                    </View>
                                                    {isDarkTheme ? <PinDarkIcon /> : <PinBlackIcon />}
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : chat.id === 3 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        {isDarkTheme ? <MicrophoneDarkIcon /> : <MikeBlackIcon />}
                                                    </View>
                                                    <H14GreyVar4Bold400 style={{ color: isDarkTheme ? colors.greyVar0 : colors.greyVar4 }}>{labels.Audio}</H14GreyVar4Bold400>
                                                </RowSpaceEvenly>
                                                {isDarkTheme ? <SingleTickDarkIcon /> : <BlackSingleTickIcon />}
                                            </RowSpaceBetween>
                                        ) : chat.id === 4 ? (
                                            <RowSpaceBetween>
                                                <H14GreyVar4Bold400 style={{ color: isDarkTheme ? colors.greyVar0 : colors.greyVar4 }}>{labels.Chaturl}</H14GreyVar4Bold400>
                                                <View style={[styles.roundNumber, alignItemsCenter, justyfyCenter, { backgroundColor: colors.purpleVar3 }]}>
                                                    <Text style={styles.roundNumberText}>3</Text>
                                                </View>
                                            </RowSpaceBetween>
                                        ) : chat.id === 5 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        {isDarkTheme ? <ImageDarkIcon /> : <PictureBlackIcon />}
                                                    </View>
                                                    <H14GreyVar4Bold400 style={{ color: isDarkTheme ? colors.greyVar0 : colors.greyVar4 }}>{labels.Image}</H14GreyVar4Bold400>
                                                </RowSpaceEvenly>
                                                {isDarkTheme ? <DoubleTickDarkIcon /> : <BlackDoubleTickIcon />}
                                            </RowSpaceBetween>
                                        ) : chat.id === 6 ? (
                                            <View style={[flexRow]}>
                                                <View style={mr5} >
                                                    {isDarkTheme ? <FileDarkIcon /> : <FileBlackIcon />}
                                                </View>
                                                <H14GreyVar4Bold400 style={{ color: isDarkTheme ? colors.greyVar0 : colors.greyVar4 }}>{labels.guidelinespdf}</H14GreyVar4Bold400>
                                            </View>
                                        ) : (
                                            <View style={[flexRow]}>
                                                <View style={mr5} >
                                                    {isDarkTheme ? <PhoneIncomingDarkIcon /> : <PhoneIncomingRedIcon />}
                                                </View>
                                                <H14RedBold400 style={{ color: isDarkTheme ? colors.redVar2 : colors.red }}>{labels.MissedVoiceCall}</H14RedBold400>
                                            </View>
                                        )
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <BottomTabBar />
        </View >
    )
}

const styles = StyleSheet.create({
    whiteBg: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        overflow: 'hidden'
    },
    roundNumber: {
        height: 20,
        width: 20,
        borderRadius: 20,
    },
    roundNumberRed: {
        height: 24,
        width: 24,
        borderRadius: 20,
    },
    chatHeaderText: {
        fontSize: 19,
        color: colors.greyVar4,
        fontWeight: '700',
        top: 2
    },
    roundNumberText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 12,
        fontWeight: '400',
    },
    roundNumberTextRed: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 12,
        fontWeight: '400',
    },
    status: {
        borderWidth: 3,
        position: 'absolute',
        bottom: 0,
        right: 10,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
    statusTick: {
        borderWidth: 1.5,
        position: 'absolute',
        bottom: 0,
        right: 10,
        height: 16,
        width: 16,
        borderRadius: 100,
    },
    archiveCard: {
        height: 45,
        width: 0.90 * DevWidth,
        borderRadius: 10
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
        marginTop: 3
    }
});

export default AllChats