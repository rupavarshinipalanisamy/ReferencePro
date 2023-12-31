import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mb60, mr5, mt0, mt20, mt5, mv10, pb5, ph20, pv15 } from '../commonStyles';
import { PinnedChatsdata } from '../../utils/data/chatsData';
import { CommonLineDividerGrey, RowSpaceBetween, RowSpaceEvenly } from '../commonView';
import { H12fontBold400GreyVar4, H12fontBold400blackVar2, H14GreenBold400, H14GreyVar4Bold400, H14RedBold400, H15Blackvar2Bold500 } from '../commonText';
import { labels } from '../../utils/labels';
import { ArchiveIconBlackIcon, BlackDoubleTickIcon, BlackSingleTickIcon, BlueDoubleTickIcon, DoubleTickDarkIcon, FileBlackIcon, FileDarkIcon, ImageDarkIcon, MicrophoneDarkIcon, MikeBlackIcon, PhoneIncomingDarkIcon, PhoneIncomingRedIcon, PictureBlackIcon, SingleTickDarkIcon, VideoBlackIcon, VideoDarkIcon } from '../../utils/svg';
import { colors } from '../../utils/colors';
import { DevWidth } from '../../utils/device';
import { BottomTabBar } from '../commonComponents';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { useTheme } from '../../Theme/ThemeContext';
import CustomIcon from '../../utils/Icons';

export type ArchiveChatsProps = {
    selectedCards: number[];
    onCardSelection: (cardId: number) => void;
}


const ArchiveChats = ({ selectedCards, onCardSelection }: ArchiveChatsProps) => {
    const navigation = useNavigation();
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';

    return (
        <View style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar2 : colors.white }, flex1, mt20, styles.whiteBg]}>
            <View style={flex1}>
                <ScrollView showsVerticalScrollIndicator={false} style={mb60}>
                    {PinnedChatsdata.map((chat) => (
                        <View key={chat.id}>
                            {chat.id === 1 ? <View style={mv10} /> : <CommonLineDividerGrey style={{ backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0 }} />}
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
                                                <View style={[{ backgroundColor: chat.status === 'active' ? '#20c997' : '', borderColor: isDarkTheme ? colors.darkModeVar2 : colors.white, }, chat.status === 'active' ? styles.status : null]} />
                                            )
                                        }
                                    </View>
                                    <View style={[flex1]}>
                                        <RowSpaceBetween style={pb5}>
                                            <H15Blackvar2Bold500>{chat.name}</H15Blackvar2Bold500>
                                            {
                                                chat.id === 4 ? (
                                                    <H12fontBold400blackVar2>{labels.Time1020}</H12fontBold400blackVar2>
                                                ) : (
                                                    <H12fontBold400GreyVar4>{labels.Time1020}</H12fontBold400GreyVar4>
                                                )
                                            }
                                        </RowSpaceBetween>
                                        {chat.id === 1 ? (
                                            <RowSpaceBetween>
                                                <H14GreenBold400>{labels.Typing}</H14GreenBold400>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <BlueDoubleTickIcon />
                                                    </View>
                                                    <ArchiveIconBlackIcon />
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : chat.id === 2 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        {isDarkTheme ? <VideoDarkIcon /> : <VideoBlackIcon />}
                                                    </View>
                                                    <H14GreyVar4Bold400>{labels.Video}</H14GreyVar4Bold400>
                                                </RowSpaceEvenly>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <BlueDoubleTickIcon />
                                                    </View>
                                                    <ArchiveIconBlackIcon />
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : chat.id === 3 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        {isDarkTheme ? <MicrophoneDarkIcon /> : <MikeBlackIcon />}
                                                    </View>
                                                    <H14GreyVar4Bold400>{labels.Audio}</H14GreyVar4Bold400>
                                                </RowSpaceEvenly>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        {isDarkTheme ? <SingleTickDarkIcon /> : <BlackSingleTickIcon />}
                                                    </View>
                                                    <ArchiveIconBlackIcon />
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : chat.id === 4 ? (
                                            <RowSpaceBetween>
                                                <H14GreyVar4Bold400>{labels.Chaturl}</H14GreyVar4Bold400>
                                                <RowSpaceEvenly>
                                                    <View style={[styles.roundNumber, mr5, { backgroundColor: colors.purpleVar3 }]}>
                                                        <Text style={styles.roundNumberText}>3</Text>
                                                    </View>
                                                    <ArchiveIconBlackIcon />
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : chat.id === 5 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        {isDarkTheme ? <ImageDarkIcon /> : <PictureBlackIcon />}
                                                    </View>
                                                    <H14GreyVar4Bold400>{labels.Image}</H14GreyVar4Bold400>
                                                </RowSpaceEvenly>
                                                <RowSpaceBetween>
                                                    <View style={[mr5, isDarkTheme ? mt0 : mt5]}>
                                                        {isDarkTheme ? <DoubleTickDarkIcon /> : <BlackDoubleTickIcon />}
                                                    </View>
                                                    <ArchiveIconBlackIcon />
                                                </RowSpaceBetween>
                                            </RowSpaceBetween>
                                        ) : chat.id === 6 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceBetween>
                                                    <View style={mr5} >
                                                        {isDarkTheme ? <FileDarkIcon /> : <FileBlackIcon />}
                                                    </View>
                                                    <H14GreyVar4Bold400>{labels.guidelinespdf}</H14GreyVar4Bold400>
                                                </RowSpaceBetween>
                                                <ArchiveIconBlackIcon />
                                            </RowSpaceBetween>
                                        ) : chat.id === 7 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceBetween>
                                                    <View style={mr5} >
                                                        {isDarkTheme ? <PhoneIncomingDarkIcon /> : <PhoneIncomingRedIcon />}
                                                    </View>
                                                    <H14RedBold400>{labels.MissedVoiceCall}</H14RedBold400>
                                                </RowSpaceBetween>
                                                <ArchiveIconBlackIcon />
                                            </RowSpaceBetween>
                                        ) : (
                                            <RowSpaceBetween>
                                                <RowSpaceBetween>
                                                    <View style={mr5} >
                                                        {isDarkTheme ? <PhoneIncomingDarkIcon /> : <PhoneIncomingRedIcon />}
                                                    </View>
                                                    <H14RedBold400>{labels.MissedVideoCall}</H14RedBold400>
                                                </RowSpaceBetween>
                                                <ArchiveIconBlackIcon />
                                            </RowSpaceBetween>
                                        )
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </View>
                    ))}
                </ScrollView>
            </View>
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
        height: 25,
        width: 25,
        borderRadius: 20,
    },
    roundNumberText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 12,
        fontWeight: '400',
        marginTop: 3,
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
        backgroundColor: colors.purpleVar1
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
        marginTop: 3
    }
});

export default ArchiveChats